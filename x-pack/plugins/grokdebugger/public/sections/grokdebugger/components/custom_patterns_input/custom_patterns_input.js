/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import {
  EuiAccordion,
  EuiCallOut,
  EuiCodeBlock,
  EuiFormRow,
  EuiPanel,
  EuiCodeEditor,
  EuiSpacer
} from '@elastic/eui';
import { EDITOR } from '../../../../../common/constants';

export function CustomPatternsInput({ value, onChange }) {
  const sampleCustomPatterns = `POSTFIX_QUEUEID [0-9A-F]{10,11}
MSG message-id=<%{GREEDYDATA}>`;

  return (
    <EuiAccordion
      id="customPatternsInput"
      buttonContent="Custom Patterns"
      data-test-subj="btnToggleCustomPatternsInput"
    >

      <EuiSpacer size="m" />

      <EuiCallOut
        title="Enter one custom pattern per line. For example:"
      >
        <EuiCodeBlock>
          { sampleCustomPatterns }
        </EuiCodeBlock>
      </EuiCallOut>

      <EuiSpacer size="m" />

      <EuiFormRow
        fullWidth
        data-test-subj="aceCustomPatternsInput"
      >
        <EuiPanel paddingSize="s">
          <EuiCodeEditor
            width="100%"
            value={value}
            onChange={onChange}
            setOptions={{
              highlightActiveLine: false,
              highlightGutterLine: false,
              minLines: EDITOR.PATTERN_MIN_LINES,
              maxLines: EDITOR.PATTERN_MAX_LINES,
            }}
          />
        </EuiPanel>
      </EuiFormRow>
    </EuiAccordion>
  );
}
