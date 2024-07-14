import { ENDPOINTS } from "@/constants";
import APIService from "@/lib/APIService";

// export async function GET(request) {
//   try {
//     const res = await APIService.post(
//       ENDPOINTS.ORDERS,
//       {
//         data: {
//           customerName: "sara",
//           customerEmail: "sara@gao.dfg",
//           customerMobileNumber: "9876543210",
//           cart: [
//             {
//               product: {
//                 connect: [
//                   {
//                     id: 36,
//                     position: {
//                       end: true,
//                     },
//                   },
//                 ],
//               },
//               quantity: 1,
//             },
//             {
//               product: {
//                 connect: [
//                   {
//                     id: 1,
//                     position: {
//                       end: true,
//                     },
//                   },
//                 ],
//               },
//               quantity: 1,
//             },
//           ],
//           //   cart: [
//           //     {
//           //       id: 4,
//           //       quantity: 2,
//           //       product: {
//           //         count: 1,
//           //       },
//           //     },
//           //   ],
//         },
//       }
//       //   {
//       //     baseURL: "http://localhost:1337",
//       //   }
//     );
//     return Response.json(res.data);
//   } catch (error) {
//     console.log(error);
//     return Response.json({ error });
//   }
// }

export async function POST(request) {
  const payload = await request.json();
  const res = await APIService.post(ENDPOINTS.ORDERS, payload);

  return Response.json(res.data);
}
