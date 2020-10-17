import { RootState } from "../../store/rootReducer";

export const selectSocialItems = (state: RootState) => state.social.items;
