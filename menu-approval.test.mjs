import assert from 'node:assert/strict'
import { test } from 'node:test'
import { proposeMenuUpdate, publishApprovedMenu } from './menu-approval.mjs'

const original = { name: 'Sample soup', priceCents: 850, opens: '08:00', closes: '15:00' }

test('accepts the exact approved menu revision', () => {
  const proposal = proposeMenuUpdate(original, { priceCents: 900 })
  assert.deepEqual(publishApprovedMenu(original, proposal, proposal.draftRevision), {
    ...original,
    priceCents: 900,
  })
  assert.equal(original.priceCents, 850)
})

test('rejects a price with fractional cents', () => {
  assert.throws(() => proposeMenuUpdate(original, { priceCents: 899.5 }), /Invalid menu data/)
})

test('rejects an impossible hour', () => {
  assert.throws(() => proposeMenuUpdate(original, { opens: '26:00' }), /Invalid menu data/)
})

test('rejects a closing time earlier than opening', () => {
  assert.throws(() => proposeMenuUpdate(original, { closes: '07:00' }), /Invalid menu data/)
})

test('rejects approval for an earlier preview', () => {
  const old = proposeMenuUpdate(original, { priceCents: 900 })
  const latest = proposeMenuUpdate(original, { priceCents: 950 })
  assert.throws(() => publishApprovedMenu(original, latest, old.draftRevision), /exact preview/)
})

test('rejects edits after approval', () => {
  const proposal = proposeMenuUpdate(original, { priceCents: 900 })
  proposal.draft.priceCents = 950
  assert.throws(() => publishApprovedMenu(original, proposal, proposal.draftRevision), /exact preview/)
})

test('rejects an update queued before another update was published', () => {
  const first = proposeMenuUpdate(original, { priceCents: 900 })
  const competing = proposeMenuUpdate(original, { priceCents: 950 })
  const published = publishApprovedMenu(original, first, first.draftRevision)
  assert.throws(() => publishApprovedMenu(published, competing, competing.draftRevision), /menu changed/)
})

test('rejects a duplicate attempt to publish an already applied update', () => {
  const proposal = proposeMenuUpdate(original, { priceCents: 900 })
  const published = publishApprovedMenu(original, proposal, proposal.draftRevision)
  assert.throws(() => publishApprovedMenu(published, proposal, proposal.draftRevision), /menu changed/)
})
