import {
	Box,
	Button,
	styled,
	BottomNavigation,
	List,
	ListItem,
	Container,
	Typography,
} from "@mui/material";

// ============== Общие стили =================

export const FlexCenter = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

export const TextShadow = {
	textShadow:
		"0 -2px 2px #000000, 0 -2px 2px #000000, 0 2px 2px #000000, 0 2px 2px #000000, -2px 0 2px #000000, 2px 0 2px #000000, -2px 0 2px #000000, 2px 0 2px #000000, -1px -2px 2px #000000, 1px -2px 2px #000000, -1px 2px 2px #000000, 1px 2px 2px #000000, -2px -1px 2px #000000, 2px -1px 2px #000000, -2px 1px 2px #000000, 2px 1px 2px #000000, -2px -2px 2px #000000, 2px -2px 2px #000000, -2px 2px 2px #000000, 2px 2px 2px #000000, -2px -2px 2px #000000, 2px -2px 2px #000000, -2px 2px 2px #000000, 2px 2px 2px #000000",
};

export const BlueBlink = {
	background:
		"linear-gradient(90deg, rgba(30, 134, 166, 1) 2%, rgba(4, 177, 232, 1) 54%, rgba(30, 134, 166, 1) 100%)",
	boxShadow: "0px 0px 15px 15px rgba(46, 175, 255, 0.9)",
};

export const BlueBlinkForButton = {
	background:
		"linear-gradient(90deg, rgba(30, 134, 166, 1) 2%, rgba(4, 177, 232, 1) 54%, rgba(30, 134, 166, 1) 100%)",
	boxShadow: "0px 0px 15px 4px rgba(46, 175, 255, 0.9)",
};

export const EndLineStyle = {
	...FlexCenter,
	marginTop: "65px",
};

export const BuyItemBorder = {
	border: "3px solid #2fb3ff",
	borderRadius: "35px",
	backgroundColor: "rgba(0, 0, 0, 0.5)",
};

// ============== Стили Карточки продукта =================

export const ProductsOnMainPage = styled(Box)({
	height: "fit-content",
});

export const ProductCardOnMainPage = styled(Box)({
	...FlexCenter,
	flexDirection: "column",
	justifyContent: "space-between !important",
});

export const ProductCardLoaderContainer = styled(Container)({
	...FlexCenter,
	margin: "25px 0px",
	flexDirection: "row",
	justifyContent: "space-between",
});

export const StyledContainer = styled(Box)({
	...FlexCenter,
	flexDirection: "column",
});

export const ProductContainer = styled(Box)({
	...FlexCenter,
	flexDirection: "row",
	justifyContent: "space-between",
});

// ============== Стили ProgramPage =================

export const BuyItemBlock = styled(Box)({
	width: "100%",
	height: "fit-content",
	...FlexCenter,
	flexDirection: "column",
});

export const ProgramButtonContainer = styled(Box)({
	...FlexCenter,
	marginBottom: "45px",
});

// ============== Стили Карточки программы =================

const ProgramBorder = {
	border: "3px solid #2fb3ff",
	borderRadius: "35px",
	backgroundColor: "rgba(0, 0, 0, 0.5)",
};

export const ProgramBlock = styled(Box)({
	...FlexCenter,
	...ProgramBorder,
	width: "100%",
	height: "fit-content",
	minHeight: "680px",
	marginBottom: "35px",
	justifyContent: "space-around",
});

export const BuyItemDescription = styled(Box)({
	...FlexCenter,
	justifyContent: "space-around",
	maxWidth: "740px",
	maxHeight: "fit-content",
	flexDirection: "column",
	marginBottom: "25px",
	paddingLeft: "25px",

	a: {
		textDecoration: "none",
	},

	"&:active": {
		textDecoration: "none",
	},
});

export const ProductImageBox = styled(Box)({
	...FlexCenter,
	marginTop: "70px",
	marginBottom: "25px",
	height: "315px",
	transition: "all 0.3s ease-in-out",

	"&:hover": {
		transform: "scale(1.1)",
	},
});

export const ProgramImage = styled(Box)({
	...FlexCenter,
	width: "500px",
	height: "590px",
	overflow: "hidden",
	marginLeft: "45px",
	marginRight: "25px",

	borderRadius: "50px",
	boxSizing: "border-box",

	transition: "all 0.1s ease-in-out",

	"&:hover": {
		...BlueBlink,
	},
});

// ============== Стили Экрана покупки предмета =================

export const GeneralBuyItemBlock = styled(Box)({
	...FlexCenter,
});

export const BuyItemTitleBlock = styled(Box)({
	...BuyItemBorder,
	...FlexCenter,
	width: "fit-content",
	paddingLeft: "25px",
	paddingRight: "25px",
	// paddingTop: "15px",

	margin: "25px 0px",
});

export const BuyItemDescriptionBlock = styled(Box)({
	...BuyItemBorder,
	...FlexCenter,
	width: "100%",
	height: "fit-content",
	minHeight: "680px",
	marginBottom: "35px",
	justifyContent: "space-around",
});

// ============== Стили Модального окна =================

export const ModalContainer = styled(Box)({
	height: "100vh",
	width: "100vw",
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	position: "fixed",
	top: 0,
	left: 0,
	animation: "ani 2.5s forwards",
	...FlexCenter,
});

export const ModalContent = styled(Box)({
	...FlexCenter,
	flexDirection: "column",
	borderRadius: "25px",
	width: "400px",
	background:
		"radial-gradient(circle,rgba(30, 134, 166, 1) 2%,rgba(152, 238, 255, 1) 54%,rgba(30, 134, 166, 1) 100%)",
	border: "3px solid #2fb3ff",
});

// ============== Стили кнопок =================

export const BuyItemButtonContainer = styled(Box)({
	...FlexCenter,
	justifyContent: "space-around",
	width: "300px",
});

export const StyledGeneralButton = styled(Button)({
	textTransform: "unset",
	...FlexCenter,

	width: "fit-content",
	minHeight: "40px !important",
	height: "auto",
	lineHeight: "1.5",

	background: "rgb(0, 104, 136)",

	border: "#2fb3ff 3px solid",
	borderRadius: "25px",

	fontFamily: '"Anton", sans-serif',
	fontWeight: 700,
	fontStyle: "normal",
	fontSize: "6mm",
	color: "#ffffff",
	textShadow: "2px 2px 2px #012133",
	paddingBottom: "5px",
	paddingLeft: "12px",
	paddingRight: "12px",
	transition: "all 0.1s ease-in-out",

	"&:hover": {
		...BlueBlinkForButton,
		transform: "scale(1.01)",
		cursor: "pointer",

		"&:active": {
			transform: "scale(0.975)",
			transition: "none",
		},
	},
});

// =================== стили Header =========================

export const HeaderBackground = styled(Box)({
	height: "274px",
	width: "1336px",

	backgroundRepeat: "no-repeat",
	backgroundSize: "1336px",
	backgroundImage:
		' url("https://i.postimg.cc/sf9tbKcL/header-background.png")',
	position: "relative",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
});

export const HeaderGraffity = styled(Box)({
	position: "absolute",
	top: "-60px",
	left: "-25px",
	cursor: "pointer",

	"&:active": {
		transform: "scale(0.98)",
	},
});

export const HeaderStrongMan = styled(Box)({
	height: "230px",
	position: "absolute",
	left: "50%",
	transform: "translateX(-50%)",

	"&:active": {
		transform: "translateX(-50%) scale(0.98)",
	},
});

// =================== стили Cart =========================

export const CartArea = styled(Box)({
	display: "flex",
	justifyContent: "flex-end",
	width: "100%",
});

export const CartContainer = styled(Box)({
	...FlexCenter,
	flexDirection: "column",
});

export const CartCountPlace = styled(Box)({
	background:
		"linear-gradient(90deg,rgba(30, 134, 166, 1) 2%, rgba(4, 177, 232, 1) 54%, rgba(30, 134, 166, 1) 100%)",
	marginTop: "15px",
	marginRight: "12px",
	paddingLeft: "8px",
	paddingRight: "8px",
	width: "fit-content",
	height: "fit-content",
	marginBottom: "8px",

	borderRadius: "8px",

	fontFamily: '"Micro 5", sans-serif',
	fontWeight: 400,
	fontStyle: "normal",
	fontSize: "xx-large",
	color: "white",
});

export const CartImage = styled(Box)({
	marginRight: "16px",
	marginBottom: "2px",
	cursor: "pointer",

	"&:active": {
		transform: "scale(0.93)",
	},
});

// =================== стили Navigation =========================

export const Navigation = styled(BottomNavigation)({
	maxHeight: "inherit",
	color: "aliceblue",
	background: "transparent",
	bottom: 0,
	width: "100%",
	...FlexCenter,
});

export const NavigationUL = styled(List)({
	listStyleType: "none",
	width: "100%",

	fontFamily: '"Anta", sans-serif',
	fontWeight: 800,
	fontStyle: "normal",
	textShadow: "2px 2px 2px #000",

	display: "flex",
	justifyContent: "space-around",
	zIndex: 4,

	textDecoration: "none",

	a: {
		textDecoration: "none",
	},

	"a: visited": {
		color: "aliceblue",
		textDecoration: "none",
	},
});

export const NavigationLi = styled(ListItem)({
	...FlexCenter,
	padding: "0px 20px",

	transition: "all 0.5s ease",

	cursor: "pointer",
	border: "3px solid",
	borderRadius: "8px",
	backgroundColor: "#20a0db",
	textShadow: "none",
	color: "#000000",
	height: "35px",
	width: "fit-content !important",

	"&:hover": {
		background: "transparent",
		borderRadius: "8px",
		color: "antiquewhite",

		borderColor: "#20a0db",
		textShadow: "2px 1px 2px black",
	},
});

// =================== стили Typographies =========================

export const TitleContainer = styled(Box)({
	...FlexCenter,
	width: "100%",
	height: "fit-content",
	transition: "all 1s ease-in-out",
	textAlign: "center",
});

export const PriceTextContainer = styled(Box)({
	...FlexCenter,
	width: "100%",
	height: "fit-content",
	transition: "all 1s ease-in-out",
	textAlign: "center",
	marginTop: "20px",
	marginBottom: "20px",
});

export const LastWordContainer = styled(Box)({
	display: "flex",
	justifyContent: "end",
	width: "100%",
	height: "fit-content",
	marginTop: "15px",
	marginBottom: "25px",
});

export const ProgramShortReadContainer = styled(Box)({
	marginBottom: "35px",
	marginTop: "45px",
});

export const ProgramLongReadContainer = styled(Box)({
	maxWidth: "750px",
	width: "fit-content",
	marginBottom: "35px",
});

export const StyledMainTitle = styled(Typography)({
	fontFamily: '"Anton", sans-serif',
	fontWeight: 700,
	fontStyle: "normal",
	fontSize: "14mm",
	color: "#1dd6ff",
	...TextShadow,
});

export const StyledMediumTitle = styled(Typography)({
	...TextShadow,
	fontFamily: '"Arial", cursive',
	fontWeight: 400,
	fontSize: "11mm",
	fontStyle: "italic",

	color: "#37dbff",
	marginBottom: "25px",

	textAlign: "center",
	lineHeight: "50px",
});

export const StyledArticleText = styled(Typography)({
	...FlexCenter,
	...TextShadow,
	fontFamily: '"Arial", cursive',
	fontWeight: 400,
	fontSize: "8mm",
	fontStyle: "italic",

	color: "#ffffff",

	textAlign: "center",
	lineHeight: "50px",
});

const ArticleTitleText = {
	marginTop: "20px",

	fontFamily: '"Arial", sans-serif',
	fonWeight: 700,
	fontStyle: "italic",
	fontSize: "13mm",

	color: "aliceblue",

	transition: "all 0.5s ease-in-out",

	"&:hover": {
		cursor: "pointer",
	},

	"&:active": {
		transform: "scale(0.975)",
		transition: "none",
	},
};

export const BuyItemLongRead = styled(Typography)({
	...FlexCenter,
	...TextShadow,
	...ArticleTitleText,
	fontSize: "8mm",
	marginBottom: "-70px",
	marginTop: "20px",
	textAlign: "center",
});

export const StyledArticleTitle = styled(Typography)({
	...FlexCenter,
	...TextShadow,
	...ArticleTitleText,
});
