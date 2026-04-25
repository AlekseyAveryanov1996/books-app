import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from 'eslint-config-prettier/flat'
import fsdPlugin from 'eslint-plugin-fsd-lint'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts,mts,tsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),
  // {
  //   plugins: {
  //     fsd: fsdPlugin,
  //   },
  //   rules: {
  //     'fsd/forbidden-imports': 'error',
  //     'fsd/no-relative-imports': 'error',
  //     'fsd/no-public-api-sidestep': 'error',
  //     'fsd/no-cross-slice-dependency': 'error',
  //     'fsd/no-ui-in-business-logic': 'error',
  //     'fsd/no-global-store-imports': 'error',
  //     'fsd/ordered-imports': 'warn',
  //   },
  // },

  skipFormatting,
)
