// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(request: NextApiRequest,response: NextApiResponse<string[]>) {
    response.status(200).json([
        'คือสังคมนิยมกับคอมมิวนิสต์มันไม่เหมือนกันนะ แยกกันให้ออก',
        'ถ้าเราล้มทุนนิยมได้ เราคงได้เห็นคนทำตามความฝันตัวเองกันมากขึ้น',
        'เกลียดคนรวยว่ะ แค่มีเงินมากกว่าก็มีทางเลือกมากกว่าแล้ว ทุนนิยมเฮงซวย',
        'อยากให้สหภาพแรงงานไทยแข็งแรง กูต้องการสังคมนิยมประชาธิปไตย',
        'สมแล้วที่แม่งเป็นสังคมทุนนิยม',
        'ทรานส์เป็นผู้หญิง',
        'ทุกคนควรจะได้รับรัฐสวัสดิการพื้นฐาน'
    ]);
}
