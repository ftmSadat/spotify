<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 -960 960 960"
       class="fill-lightBG saturate-50"
       :width="props.width"
       :height="props.height"
  >
    <path :d="path"/>
  </svg>

</template>

<script setup lang="ts">
import {defineProps, computed, useSlots} from "vue";
import {UseSvgIcon} from "@/stores/icons";
import {Icons} from "@/types";

type propTypes = {
  width?: string
  height?: string
  name: string
}
const props = defineProps<propTypes>()
const slots = useSlots()
/*get user from store with filtered name */
const iconStore = UseSvgIcon()
const svgIcon = computed((): Icons => iconStore.Icons.find(icon => icon.name === props.name))
const {path} = svgIcon.value;
</script>
