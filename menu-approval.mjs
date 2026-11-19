import { createHash } from 'node:crypto'
import validate from './menu-validator.mjs'

function revision(menu) {
  return createHash('sha256').update(JSON.stringify(menu)).digest('hex')
}

export function proposeMenuUpdate(published, patch) {
  const draft = { ...published, ...patch }
  if (!validate(draft) || draft.opens >= draft.closes) {
    throw new Error('Invalid menu data')
  }

  return { baseRevision: revision(published), draftRevision: revision(draft), draft }
}

export function publishApprovedMenu(published, proposal, approvedRevision) {
  if (revision(published) !== proposal.baseRevision) {
    throw new Error('Published menu changed; create a new preview')
  }
  if (
    approvedRevision !== proposal.draftRevision ||
    revision(proposal.draft) !== proposal.draftRevision
  ) {
    throw new Error('Approval must match the exact preview')
  }

  return structuredClone(proposal.draft)
}
