import OfferDetails, { IOfferNode } from '../../components/Offers/OfferDetails';
function Company() {
  return <OfferDetails offerDetails={mockOfferNode} />;
}

export default Company;

const mockOfferNode: IOfferNode = {
  companyName: 'Mediavine',
  companyUrl: '7uncf5-mediavine',
  companyWebsite: 'mediavine.com',
  coverImageUuid: '44222df5-84bc-e482-0000-0174bad3cb46',
  creationDate: '2020-09-20T20:49:09.938+02:00',
  currency: 'USD',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deserunt tempore? Animi quis ullam esse minima nobis aspernatur doloribus commodi. Culpa omnis fugit blanditiis nam vel minima cum iste quasi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deserunt tempore? Animi quis ullam esse minima nobis aspernatur doloribus commodi. Culpa omnis fugit blanditiis nam vel minima cum iste quasi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deserunt tempore? Animi quis ullam esse minima nobis aspernatur doloribus commodi. Culpa omnis fugit blanditiis nam vel minima cum iste quasi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deserunt tempore? Animi quis ullam esse minima nobis aspernatur doloribus commodi. Culpa omnis fugit blanditiis nam vel minima cum iste quasi?',
  externalOffer: true,
  hasApplicationURL: true,
  jobTitle: 'Web Developer',
  mainSkills: ['Subversion / Git', 'WordPress'],
  mustHaveSkills: ['Subversion / Git', 'WordPress'],
  niceToHaveSkills: [],
  offerId: 'k0euv8',
  offerUrl: 'k0euv8-mediavine-web-developer',
  publishStatus: 'ACTIVE',
  salaryFrom: 5417,
  salaryTo: 7084,
  startDate: '2020-09-23T13:57:56.42+02:00',
  technology: 'PHP',
  timezone: 'AMERICAS',
  workType: 'FULL_TIME',
};
