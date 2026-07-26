<script lang="ts" setup>
import type { ToasterProps } from "vue-sonner"
import { CircleCheckIcon, InfoIcon, Loader2Icon, OctagonXIcon, TriangleAlertIcon, XIcon } from "@lucide/vue"
import { Toaster as Sonner } from "vue-sonner"
import { cn } from "@/lib/utils"

import 'vue-sonner/style.css';

const props = defineProps<ToasterProps>()
</script>

<template>
  <Sonner
    :class="cn('toaster group', props.class)"
    :style="{
      '--normal-bg': 'var(--popover)',
      '--normal-text': 'var(--popover-foreground)',
      '--normal-border': 'var(--border)',
      '--border-radius': 'var(--radius)',

      '--success-bg': 'var(--success-foreground)',
      '--success-text': 'var(--success)',
      '--success-border': 'var(--success-secondary)',

      '--error-bg': 'var(--danger-foreground)',
      '--error-text': 'var(--danger)',
      '--error-border': 'var(--error-secondary)',

      '--warning-bg': 'var(--warning-foreground)',
      '--warning-text': 'var(--warning)',
      '--warning-border': 'var(--warning-secondary)',

      '--info-bg': 'var(--info-foreground)',
      '--info-text': 'var(--info)',
      '--info-border': 'var(--info-secondary)',
    }"
    v-bind="props"
  >
    <template #success-icon>
      <CircleCheckIcon class="size-4" />
    </template>
    <template #info-icon>
      <InfoIcon class="size-4" />
    </template>
    <template #warning-icon>
      <TriangleAlertIcon class="size-4" />
    </template>
    <template #error-icon>
      <OctagonXIcon class="size-4" />
    </template>
    <template #loading-icon>
      <div>
        <Loader2Icon class="size-4 animate-spin" />
      </div>
    </template>
    <template #close-icon>
      <XIcon class="size-4" />
    </template>
  </Sonner>
</template>
