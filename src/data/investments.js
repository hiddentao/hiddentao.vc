const private = [
  {
    name: 'Now to Vow',
    profile: 'https://nowtovow.co.uk/',
    date: '2021-01-01',
    stage: 'seed',
  },
].map(v => { v.platform = 'private'; return v })

const crowdcube = [
  {
    name: 'Rentify',
    profile: 'https://angel.co/company/rentify-1',
    date: '2016-01-01',
    stage: 'seed',
  },
  {
    name: 'BuffaloGrid',
    profile: 'https://angel.co/company/buffalogrid',
    date: '2016-01-01',
    stage: 'seed',
  },
].map(v => { v.platform = 'crowdcube'; return v })

const angellist = [
  {
    name: 'Thematic',
    profile: 'https://angel.co/company/thematic-3',
    date: '2021-02-01',
    stage: 'seed',
  },
  {
    name: 'Move',
    profile: 'https://angel.co/company/supermove',
    date: '2021-02-01',
    stage: 'seed',
  },
  {
    name: 'JetLenses',
    profile: 'https://angel.co/company/jetlenses-5',
    date: '2021-02-01',
    stage: 'seed',
  },
  {
    name: 'Frey',
    profile: 'https://angel.co/company/freyclothingcare',
    date: '2021-02-01',
    stage: 'seed',
  },
  {
    name: 'AppBind',
    profile: 'https://angel.co/company/appbind',
    date: '2021-02-01',
    stage: 'seed',
  },
].map(v => { v.platform = 'angel.co'; return v })

const crypto = [
  {
    name: 'Ethereum',
    profile: 'https://ethereum.org',
    date: '2014-01-01',
    stage: 'presale',
  },
  {
    name: 'Elrond',
    profile: 'https://elrond.com',
    date: '2019-12-01',
    stage: 'market',
  },
  {
    name: 'Terra Virtua',
    profile: 'https://terra-virtua.io',
    date: '2021-01-31',
    stage: 'market',
  },
  {
    name: 'Skale',
    profile: 'https://skale.network',
    date: '2020-06-31',
    stage: 'ico',
  },
].map(v => { v.platform = 'crypto'; return v })

module.exports = [].concat(
  private,
  angellist,
  crowdcube,
  crypto,
)