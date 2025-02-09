import Pagination from "@mui/material/Pagination";
import { ChangeEvent, useEffect, useRef, useState, type FC } from "react";

import {
	ArticleText,
	LastWordText,
	MainTitle,
} from "@shared/ui/Typographies/Typographies";
import { useCurrentPage } from "@shared/model/paginationStore";
import { useQueryPrograms } from "@entities/trainingProgram";
import { BuyItemBlock, ProgramButtonContainer } from "@assets/styles";
import { TrainingProgram } from "@widgets/TrainingProgram";
import { Button } from "@shared/ui/Button";
import { CircularProgress } from "@mui/material";

export const ProgramsPage: FC = () => {
	const { data: requestedPrograms, isLoading } = useQueryPrograms();

	const { selectedCurrentPage, selectCurrentPage } = useCurrentPage();
	const itemsPerPage = 3; // количество элементов на странице

	const scrollRef = useRef<number>(0);

	const handleScroll = () => {
		scrollRef.current = window.scrollY;
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		window.scrollTo(0, scrollRef.current);
	}, []);

	const handleLearnMoreClick = () => {
		// Здесь вы сохраняете текущую позицию прокрутки
		scrollRef.current = window.scrollY;
	};

	if (isLoading) {
		return <CircularProgress />;
	}

	const indexOfLastProgram = selectedCurrentPage * itemsPerPage;
	const indexOfFirstProgram = indexOfLastProgram - itemsPerPage;
	const currentItems =
		requestedPrograms[0].programs.slice(
			indexOfFirstProgram,
			indexOfLastProgram
		) ?? [];

	const handleChangePage = (event: ChangeEvent<unknown>, newPage: number) => {
		selectCurrentPage(newPage);
	};

	return (
		<BuyItemBlock>
			<MainTitle content="Программы тренировок" />
			<ArticleText content="Составление тренировок представляет собой сложный процесс, требующий большого опыта и специальных знаний. К счастью, Вам не придется тратить свое время на это - просто доверьтесь профессионалам. Наши тренеры составили программы тренировок, среди которых Вы можете выбрать или подобрать под себя именно то, что подходит именно Вам, воспользовавшись нашим сервисом подбора программы тренировок. Желаем удачи на тропе спорта!" />
			<LastWordText content="С уважением, команда React Gym" />

			<ProgramButtonContainer>
				<Button title="Подобрать программу тренировок" />
			</ProgramButtonContainer>

			{currentItems.map((program) => {
				const position = program.id % 2 === 0 ? 0 : 1;
				return (
					<TrainingProgram
						position={position}
						key={program.id}
						onLearnMore={handleLearnMoreClick}
						{...program}
					/>
				);
			})}

			<Pagination
				onChange={handleChangePage}
				count={5}
				color="primary"
				size="large"
				sx={{
					"& .MuiButtonBase-root.MuiPaginationItem-root": {
						margin: "10px 3px !important",
						minWidth: "45px",
						border: "3px solid #1dd6ff !important",
						fontFamily: '"Anton", sans-serif',
						fontWeight: 500,
						fontStyle: "normal",
						fontSize: "6mm",
						color: "#ffffff",
					},
				}}
				page={selectedCurrentPage}
			/>
		</BuyItemBlock>
	);
};
