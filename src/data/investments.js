const private = [
  {
    name: 'Now to Vow',
    profile: 'https://nowtovow.co.uk/',
    date: '2021-01-01',
    stage: 'seed',
    img: 'now-to-vow.png',
  },
].map(v => { v.platform = 'private'; return v })

const crowdcube = [
  {
    name: 'Rentify',
    profile: 'https://angel.co/company/rentify-1',
    date: '2016-01-01',
    stage: 'seed',
    img: 'rentify.svg',
  },
  {
    name: 'BuffaloGrid',
    profile: 'https://angel.co/company/buffalogrid',
    date: '2016-01-01',
    stage: 'seed',
    img: 'buffalogrid.png',
    imgBg: '#000',
  },
].map(v => { v.platform = 'crowdcube'; return v })

const angellist = [
  {
    name: 'Thematic',
    profile: 'https://angel.co/company/thematic-3',
    date: '2021-02-01',
    stage: 'seed',
    img: 'thematic.png',
    imgBg: '#000',
  },
  {
    name: 'Move',
    profile: 'https://angel.co/company/supermove',
    date: '2021-02-01',
    stage: 'seed',
    img: 'move.png',
    imgBg: '#000',
  },
  {
    name: 'JetLenses',
    profile: 'https://angel.co/company/jetlenses-5',
    date: '2021-02-01',
    stage: 'seed',
    img: 'jetlenses.svg',
    imgBg: '#fff',
  },
  {
    name: 'Frey',
    profile: 'https://angel.co/company/freyclothingcare',
    date: '2021-02-01',
    stage: 'seed',
    img: 'frey.webp',
  },
  {
    name: 'AppBind',
    profile: 'https://angel.co/company/appbind',
    date: '2021-02-01',
    stage: 'seed',
    img: 'appbind.png',
  },
  {
    name: 'Disco',
    profile: 'https://letsdisco.com/',
    date: '2021-03-01',
    stage: 'seed',
    img: 'disco.svg',
  },
].map(v => { v.platform = 'angel.co'; return v })

const crypto = [
  {
    name: 'Ethereum',
    profile: 'https://ethereum.org',
    date: '2014-01-01',
    stage: 'presale',
    img: 'ethereum.png',
  },
  {
    name: 'Elrond',
    profile: 'https://elrond.com',
    date: '2019-12-01',
    stage: 'market',
    img: 'elrond.png',
  },
  {
    name: 'Skale',
    profile: 'https://skale.network',
    date: '2020-06-31',
    stage: 'ico',
    img: 'skale.jpeg',
  },
  {
    name: 'Flow',
    profile: 'https://www.onflow.org/',
    date: '2020-06-31',
    stage: 'ico',
    img: 'flow.svg',
  },
  {
    name: 'Terra Virtua',
    profile: 'https://www.terravirtua.io/',
    date: '2021-01-31',
    stage: 'market',
    img: 'terravirtua.png',
  },
].map(v => { v.platform = 'crypto'; return v })

module.exports = [].concat(
  private,
  angellist,
  crowdcube,
  crypto,
)