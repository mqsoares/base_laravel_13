<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { dashboard, login } from '@/routes';

</script>

<template>
    <header class="p-6 w-full max-w-4xl mx-auto text-sm not-has-[nav]:hidden ">
        <nav class="flex items-center justify-end gap-4">
            <Link
                v-if="$page.props.auth.user"
                :href="dashboard()"
                class="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
            >
                Acessar sistema
            </Link>
            <template v-else>
                <Link
                    :href="login()"
                    class="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                >
                    Entrar
                </Link>
            </template>
        </nav>
    </header>

    <div
        class="flex min-h-[85vh] flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] justify-center lg:p-8 dark:bg-[#0a0a0a]"
    >
        <div class="text-center bg-white p-8 rounded-lg shadow-lg border border-[#19140035] dark:bg-[#161615] dark:text-[#EDEDEC] dark:border-[#3E3E3A]">
            <div>
                <span class="text-5xl">
                    🚧
                </span>
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    Em Construção!
                </h1>
            </div>
            <p class="text-lg text-gray-600 mb-4 dark:text-[#A1A09A]">
                Nosso sistema está em desenvolvimento e em breve estará pronto para uso.
            </p>
            <p class="text-lg text-gray-600 dark:text-[#A1A09A]">
                Agradecemos pela sua paciência e compreensão. Fique atento para mais novidades!
            </p>
        </div>
    </div>
</template>
