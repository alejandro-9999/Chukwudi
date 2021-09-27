// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    let json_data:any = [
        {
            "id": 1,
            "name": "All",
            "icon": "https://image.flaticon.com/icons/svg/701/701965.svg"
        },
        {
            "id": 2,
            "name": "Pizza",
            "icon": "https://image.flaticon.com/icons/svg/599/599995.svg"
        },
        {
            "id": 3,
            "name": "Asian",
            "icon": "https://image.flaticon.com/icons/svg/1895/1895684.svg"
        },
        {
            "id": 4,
            "name": "Burgers",
            "icon": "https://image.flaticon.com/icons/svg/883/883806.svg"
        },
        {
            "id": 5,
            "name": "Barbecue",
            "icon": "https://image.flaticon.com/icons/svg/933/933310.svg"
        },
        {
            "id": 6,
            "name": "Dessers",
            "icon": "https://image.flaticon.com/icons/svg/174/174394.svg"
        },
        {
            "id": 7,
            "name": "Thai",
            "icon": "https://image.flaticon.com/icons/svg/135/135367.svg"
        },
        {
            "id": 8,
            "name": "Sushi",
            "icon": "https://image.flaticon.com/icons/svg/1900/1900683.svg"
        }
    ];
  res.status(200).send(json_data);
}
