import { existsSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

// eslint-disable-next-line no-undef
export default function (plop) {
  plop.setGenerator('component', {
    description: 'React component using JavaScript',
    prompts: [
      {
        type: 'list',
        name: 'component',
        message: 'Component type',
        choices: ['Function'],
        default: 0,
      },
      {
        type: 'list',
        name: 'base',
        message: 'Base directory',
        choices: ['features', 'shared'],
        default: 0,
      },
      {
        type: 'confirm',
        name: 'createInFeaturesFolder',
        message: 'Create in features folder (without subfolder)?',
        when: function (answers) {
          return answers.base === 'features';
        },
        default: true,
      },
      {
        type: 'list',
        name: 'subfolder',
        message: 'Subfolder within features directory',
        choices: function () {
          const subfolders = [];

          if (existsSync('src/features')) {
            const featureSubfolders = readdirSync('src/features').filter(function (file) {
              return statSync(join('src/features', file)).isDirectory();
            });
            subfolders.push(...featureSubfolders);
          }

          return subfolders;
        },
        when: function (answers) {
          return answers.base === 'features' && !answers.createInFeaturesFolder;
        },
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions: function (data) {
      const basePath =
        data.base === 'features'
          ? data.createInFeaturesFolder
            ? 'src/features'
            : `src/features/${data.subfolder}`
          : `src/${data.base}`;

      return [
        {
          type: 'add',
          path: `${basePath}/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.jsx`,
          templateFile: `plop-templates/component/Component.jsx.hbs`,
        },
        {
          type: 'add',
          path: `${basePath}/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.module.scss`,
          templateFile: 'plop-templates/component/Component.scss.hbs',
        },
        {
          type: 'add',
          path: `${basePath}/{{directory}}/{{pascalCase name}}/index.js`,
          templateFile: 'plop-templates/component/Component.index.hbs',
        },
      ];
    },
  });
}
