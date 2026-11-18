import type { FolderTreeNode } from '../types/portfolio.type';
import { toFileNode as file, toFolderNode as folder } from '../utils/folder-tree.util';

export const FOLDER_STRUCTURE_STEP = {
  id: 'folder-structure',
  label: 'src/',
} as const;

export const PROJECT_FOLDER_TREE: readonly FolderTreeNode[] = [
  folder('src', 'src', [
    folder('_widgets', 'widgets', [
      folder('ui', 'widgetsUi', [
        folder('button', undefined, [
          file('button.tsx'),
          file('variant.ts', 'cvaVariants'),
          file('constants.ts', 'variantConstants'),
          file('types.ts'),
        ]),
        folder('form', 'formFields', [
          folder('input-field', 'inputField'),
          folder('multi-select-field', 'multiSelectField'),
          folder('select-field'),
          folder('date-picker-field'),
          folder('form-field-shell', 'formFieldShell'),
          file('use-form-field.ts', 'useFormField'),
        ]),
      ]),
      folder('lib', 'cn'),
      file('public-api.ts', 'uiEntrypoint'),
    ]),
    folder('core', 'core', [
      folder('apis', 'apis'),
      folder('contract', 'contract'),
      folder('interceptor', 'interceptor'),
      folder('guards', 'guards'),
      folder('constants', 'constants'),
      folder('store', 'store'),
      folder('types', 'types'),
    ]),
    folder('shared', 'shared', [folder('components'), folder('layout'), folder('hooks')]),
    folder('modules', 'modules', [
      folder('user-management', 'userManagement', [
        file('user-management.tsx', 'page'),
        folder('components', undefined, [
          folder('user-management-toolbar', undefined, [
            file('user-management-toolbar.tsx'),
            file('user-management-filters.tsx', 'renderedByToolbar'),
          ]),
          folder('user-management-table', undefined, [
            file('user-management-table.tsx'),
            folder('user-management-table-body', 'tableBody'),
          ]),
          folder('user-management-dialogs', undefined, [
            file('user-management-dialogs.tsx', 'dialogsHost'),
            folder('user-create-dialog', undefined, [
              file('user-create-dialog.tsx'),
              file('user-create-dialog-body.tsx', 'theForm'),
            ]),
            folder('user-edit-dialog'),
          ]),
        ]),
        folder('converters', 'converters'),
        folder('hooks', 'mutations'),
        folder('queries', 'queries'),
        folder('schema', 'schema'),
        folder('services', 'services'),
        folder('types'),
      ]),
    ]),
    folder('router', 'router', [
      file('routes.tsx'),
      folder('routes', 'routes'),
      folder('loaders', 'loaders'),
    ]),
    folder('locale', 'locale'),
    folder('test', 'test'),
  ]),
];
