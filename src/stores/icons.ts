import {defineStore} from "pinia";
import type {Icons} from "@/types"
import { SVG_ICONS } from "@/data/icons";

type IconsShape = {
    list: Icons[];
};
export const UseSvgIcon = defineStore("SvgIcon", {
    state: (): IconsShape => ({
        list: SVG_ICONS,
    }),
    getters: {
        Icons: (state): Icons[] => state.list,
    }
})