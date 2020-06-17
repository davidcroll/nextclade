import React from 'react'

import { Table } from 'reactstrap'
import { useTranslation } from 'react-i18next'

import type { AlgorithmResult } from 'src/algorithms/run'
import { SequenceView } from './SequenceView'

export type ResultProps = AlgorithmResult

export function Result({ result }: ResultProps) {
  const { t } = useTranslation()

  if (!result) {
    return null
  }

  const rows = result.map((sequence, i) => {
    const { clades, seqName } = sequence
    const cladesList = Object.keys(clades).join(', ')

    return (
      <tr className="results-table-row" key={seqName}>
        <td className="results-table-col results-table-col-label">{seqName}</td>
        <td className="results-table-col results-table-col-clade">{cladesList}</td>
        <td className="results-table-col results-table-col-mutations">
          <SequenceView key={seqName} sequence={sequence} />
        </td>
      </tr>
    )
  })

  return (
    <Table className="results-table">
      <thead>
        <tr className="results-table-row">
          <th className="results-table-header">{t('Sequence name')}</th>
          <th className="results-table-header">{t('Clades')}</th>
          <th className="results-table-header">{t('Mutations')}</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}
