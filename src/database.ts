// export interface iContact {
//   firstName: string;
//   lastName: string | null;
//   email: string;
//   phone: string;
//   id: string;
//   createdAt: string;
//   deletedAt: string | null;
//   updatedAt: string | null;
//   client: iClient;
// }

// export interface iClient {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   id: string;
//   createdAt: string;
//   deletedAt: string | null;
//   updatedAt: string | null;
//   isAdm: boolean;
//   isActive: boolean;
// }

// export const contactsData: iContact[] = [
//   {
//     firstName: "Thaygo",
//     lastName: null,
//     email: "thaygo@mail.com",
//     phone: "+5511946418763",
//     id: "5d267ae0-6595-45f3-ae47-75cc56b7efe5",
//     createdAt: "2023-03-26T03:11:31.179Z",
//     updatedAt: "2023-03-26T13:38:24.398Z",
//     deletedAt: null,
//     client: {
//       firstName: "Naruna",
//       lastName: "Bajgar",
//       email: "naruna@mail.com",
//       phone: "+5511943315064",
//       id: "b95fd0f1-c874-4bf1-96ca-17d6275a883f",
//       createdAt: "2023-03-25T16:23:37.005Z",
//       updatedAt: "2023-03-25T16:23:37.005Z",
//       deletedAt: null,
//       isAdm: false,
//       isActive: true,
//     },
//   },
//   {
//     firstName: "Khan",
//     lastName: null,
//     email: "khan@mail.com",
//     phone: "+5511946418763",
//     id: "5d267ae0-6595-45f3-ae47-75cc56b7efe5",
//     createdAt: "2023-03-26T03:11:31.179Z",
//     updatedAt: "2023-03-26T13:38:24.398Z",
//     deletedAt: null,
//     client: {
//       firstName: "Naruna",
//       lastName: "Bajgar",
//       email: "naruna@mail.com",
//       phone: "+5511943315064",
//       id: "b95fd0f1-c874-4bf1-96ca-17d6275a883f",
//       createdAt: "2023-03-25T16:23:37.005Z",
//       updatedAt: "2023-03-25T16:23:37.005Z",
//       deletedAt: null,
//       isAdm: false,
//       isActive: true,
//     },
//   },
//   {
//     firstName: "Erika",
//     lastName: null,
//     email: "erika@mail.com",
//     phone: "+5511946418763",
//     id: "5d267ae0-6595-45f3-ae47-75cc56b7efe5",
//     createdAt: "2023-03-26T03:11:31.179Z",
//     updatedAt: "2023-03-26T13:38:24.398Z",
//     deletedAt: null,
//     client: {
//       firstName: "Naruna",
//       lastName: "Bajgar",
//       email: "naruna@mail.com",
//       phone: "+5511943315064",
//       id: "b95fd0f1-c874-4bf1-96ca-17d6275a883f",
//       createdAt: "2023-03-25T16:23:37.005Z",
//       updatedAt: "2023-03-25T16:23:37.005Z",
//       deletedAt: null,
//       isAdm: false,
//       isActive: true,
//     },
//   },
//   {
//     firstName: "Thaygo",
//     lastName: null,
//     email: "thaygo@mail.com",
//     phone: "+5511946418763",
//     id: "5d267ae0-6595-45f3-ae47-75cc56b7efe5",
//     createdAt: "2023-03-26T03:11:31.179Z",
//     updatedAt: "2023-03-26T13:38:24.398Z",
//     deletedAt: null,
//     client: {
//       firstName: "Naruna",
//       lastName: "Bajgar",
//       email: "naruna@mail.com",
//       phone: "+5511943315064",
//       id: "b95fd0f1-c874-4bf1-96ca-17d6275a883f",
//       createdAt: "2023-03-25T16:23:37.005Z",
//       updatedAt: "2023-03-25T16:23:37.005Z",
//       deletedAt: null,
//       isAdm: false,
//       isActive: true,
//     },
//   },
//   {
//     firstName: "Khan",
//     lastName: null,
//     email: "khan@mail.com",
//     phone: "+5511946418763",
//     id: "5d267ae0-6595-45f3-ae47-75cc56b7efe5",
//     createdAt: "2023-03-26T03:11:31.179Z",
//     updatedAt: "2023-03-26T13:38:24.398Z",
//     deletedAt: null,
//     client: {
//       firstName: "Naruna",
//       lastName: "Bajgar",
//       email: "naruna@mail.com",
//       phone: "+5511943315064",
//       id: "b95fd0f1-c874-4bf1-96ca-17d6275a883f",
//       createdAt: "2023-03-25T16:23:37.005Z",
//       updatedAt: "2023-03-25T16:23:37.005Z",
//       deletedAt: null,
//       isAdm: false,
//       isActive: true,
//     },
//   },
//   {
//     firstName: "Erika",
//     lastName: null,
//     email: "erika@mail.com",
//     phone: "+5511946418763",
//     id: "5d267ae0-6595-45f3-ae47-75cc56b7efe5",
//     createdAt: "2023-03-26T03:11:31.179Z",
//     updatedAt: "2023-03-26T13:38:24.398Z",
//     deletedAt: null,
//     client: {
//       firstName: "Naruna",
//       lastName: "Bajgar",
//       email: "naruna@mail.com",
//       phone: "+5511943315064",
//       id: "b95fd0f1-c874-4bf1-96ca-17d6275a883f",
//       createdAt: "2023-03-25T16:23:37.005Z",
//       updatedAt: "2023-03-25T16:23:37.005Z",
//       deletedAt: null,
//       isAdm: false,
//       isActive: true,
//     },
//   },
//   {
//     firstName: "Thaygo",
//     lastName: null,
//     email: "thaygo@mail.com",
//     phone: "+5511946418763",
//     id: "5d267ae0-6595-45f3-ae47-75cc56b7efe5",
//     createdAt: "2023-03-26T03:11:31.179Z",
//     updatedAt: "2023-03-26T13:38:24.398Z",
//     deletedAt: null,
//     client: {
//       firstName: "Naruna",
//       lastName: "Bajgar",
//       email: "naruna@mail.com",
//       phone: "+5511943315064",
//       id: "b95fd0f1-c874-4bf1-96ca-17d6275a883f",
//       createdAt: "2023-03-25T16:23:37.005Z",
//       updatedAt: "2023-03-25T16:23:37.005Z",
//       deletedAt: null,
//       isAdm: false,
//       isActive: true,
//     },
//   },
//   {
//     firstName: "Khan",
//     lastName: null,
//     email: "khan@mail.com",
//     phone: "+5511946418763",
//     id: "5d267ae0-6595-45f3-ae47-75cc56b7efe5",
//     createdAt: "2023-03-26T03:11:31.179Z",
//     updatedAt: "2023-03-26T13:38:24.398Z",
//     deletedAt: null,
//     client: {
//       firstName: "Naruna",
//       lastName: "Bajgar",
//       email: "naruna@mail.com",
//       phone: "+5511943315064",
//       id: "b95fd0f1-c874-4bf1-96ca-17d6275a883f",
//       createdAt: "2023-03-25T16:23:37.005Z",
//       updatedAt: "2023-03-25T16:23:37.005Z",
//       deletedAt: null,
//       isAdm: false,
//       isActive: true,
//     },
//   },
//   {
//     firstName: "Erika",
//     lastName: null,
//     email: "erika@mail.com",
//     phone: "+5511946418763",
//     id: "5d267ae0-6595-45f3-ae47-75cc56b7efe5",
//     createdAt: "2023-03-26T03:11:31.179Z",
//     updatedAt: "2023-03-26T13:38:24.398Z",
//     deletedAt: null,
//     client: {
//       firstName: "Naruna",
//       lastName: "Bajgar",
//       email: "naruna@mail.com",
//       phone: "+5511943315064",
//       id: "b95fd0f1-c874-4bf1-96ca-17d6275a883f",
//       createdAt: "2023-03-25T16:23:37.005Z",
//       updatedAt: "2023-03-25T16:23:37.005Z",
//       deletedAt: null,
//       isAdm: false,
//       isActive: true,
//     },
//   },
// ];
