import { Highlight } from 'prism-react-renderer';

import { QueryState } from '@/shared/components/query-state/query-state';
import { TruncatedText } from '@/shared/components/truncated-text/truncated-text';
import { cn } from '@ui';

import { CODE_THEME } from '../../../../../../constants/code-theme.constant';
import type { CodingSkillSourcePreviewProps } from '../../../../../../types/coding-skill-source-preview.type';
import {
  toCodeLanguage,
  toDisplayPath,
  toSourceLines,
} from '../../../../../../utils/source-file.util';

export const CodingSkillSourcePreview = ({ path, sourceQuery }: CodingSkillSourcePreviewProps) => (
  <div className="flex min-h-0 flex-1 flex-col gap-2">
    <TruncatedText
      className="shrink-0 truncate font-mono text-xs text-muted-foreground"
      text={toDisplayPath(path)}
    />
    <div className="scrollbar-thin min-h-0 flex-1 overflow-auto rounded-lg border bg-muted/40">
      <QueryState
        isLoading={sourceQuery.isPending}
        isError={sourceQuery.isError}
        onRetry={() => void sourceQuery.refetch()}
      >
        <Highlight
          theme={CODE_THEME}
          code={toSourceLines(sourceQuery.data ?? '')}
          language={toCodeLanguage(path)}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={cn(className, 'w-max min-w-full py-3 font-mono text-xs leading-relaxed')}
              style={style}
            >
              <code className="table min-w-full">
                {tokens.map((line, lineNumber) => (
                  <span
                    key={`${path}:${lineNumber}`}
                    {...getLineProps({ line, className: 'table-row' })}
                  >
                    <span className="table-cell pr-4 pl-3 text-right text-muted-foreground/60 select-none">
                      {lineNumber + 1}
                    </span>
                    <span className="table-cell pr-4">
                      {line.map((token, tokenIndex) => (
                        <span key={`${lineNumber}:${tokenIndex}`} {...getTokenProps({ token })} />
                      ))}
                    </span>
                  </span>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      </QueryState>
    </div>
  </div>
);
