// src/components/SeatMatrix.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SeatMatrix() {
  return (
    <div className="overflow-hidden rounded-lg max-w-full flex-1 w-full max-h-[550px] mx-auto">
      <h3 className="text-body font-semibold text-main mb-4 flex items-center text-center text-xl">
        UG Seat Matrix (Academic Year 2026-27)
      </h3>
      <Table className="w-full">
        <TableHeader className="bg-main">
          <TableRow>
            <TableHead className="text-center">Institute Code</TableHead>
            <TableHead className="text-center">Institute Name</TableHead>
            <TableHead className="text-center">Program Code</TableHead>
            <TableHead className="text-center">Program Name</TableHead>
            <TableHead className="text-center">
              Seat Pool (State Quota)
            </TableHead>
            <TableHead className="text-center">
              Seat Pool (Gender-Neutral)
            </TableHead>
            <TableHead className="text-center">OPEN</TableHead>
            <TableHead className="text-center">OPEN-PwD</TableHead>
            <TableHead className="text-center">GEN-EWS</TableHead>
            <TableHead className="text-center">GEN-EWS-PwD</TableHead>
            <TableHead className="text-center">SC</TableHead>
            <TableHead className="text-center">SC-PwD</TableHead>
            <TableHead className="text-center">ST</TableHead>
            <TableHead className="text-center">ST-PwD</TableHead>
            <TableHead className="text-center">OBC-NCL</TableHead>
            <TableHead className="text-center">OBC-NCL-PwD</TableHead>
            <TableHead className="text-center">
              Total (includes Female Supernumerary)
            </TableHead>
            <TableHead className="text-center">
              Program-Total Seat Capacity
            </TableHead>
            <TableHead className="text-center">Female Supernumerary</TableHead>
            <TableHead className="text-center">DASA General (10%)</TableHead>
            <TableHead className="text-center">CWIG (5%)</TableHead>
            <TableHead className="text-center">Sports</TableHead>
            <TableHead className="text-center">Olympiad</TableHead>
            <TableHead className="text-center">Study-In-India</TableHead>
            <TableHead className="text-center">
              Total (incl. Female Supernumerary+DASA+SEA+SII)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* B.Tech in Computer Science and Engineering - Gender Neutral */}
          <TableRow className="bg-white even:bg-secondary/10">
            <TableCell className="text-center" rowSpan={8}>
              316
            </TableCell>
            <TableCell className="text-center" rowSpan={8}>
              Indian Institute of Information Technology (IIITDWD)
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              4110
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              B.Tech. in Computer Science and Engineering (4 Years)
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              All India
            </TableCell>
            <TableCell className="text-center">Gender-Neutral</TableCell>
            <TableCell className="text-center">75</TableCell>
            <TableCell className="text-center">4</TableCell>
            <TableCell className="text-center">19</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">29</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">15</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">52</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">240</TableCell>
            <TableCell className="text-center" rowSpan={2}>
              200
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              40
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              20
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              10
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              2
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              2
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              5
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              279
            </TableCell>
          </TableRow>
          {/* B.Tech in Computer Science and Engineering - Female Only */}
          <TableRow className="bg-white even:bg-gray-100">
            <TableCell className="text-center">
              Female-only (supernumerary)
            </TableCell>
            <TableCell className="text-center">16</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">4</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">6</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">3</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">11</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">40</TableCell>
          </TableRow>

          {/* B.Tech in Electronics and Communication Engineering - Gender Neutral */}
          <TableRow className="bg-white even:bg-gray-100">
            <TableCell className="text-center" rowSpan={2}>
              4114
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              B.Tech. in Electronics and Communication Engineering (4 Years)
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              All India
            </TableCell>
            <TableCell className="text-center">Gender-Neutral</TableCell>
            <TableCell className="text-center">36</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">10</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">15</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">8</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">26</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">120</TableCell>
            <TableCell className="text-center" rowSpan={2}>
              100
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              20
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              12
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              6
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              2
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              2
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              5
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              147
            </TableCell>
          </TableRow>
          {/* B.Tech in Electronics and Communication Engineering - Female Only */}
          <TableRow className="bg-white even:bg-gray-100">
            <TableCell className="text-center">
              Female-only (supernumerary)
            </TableCell>
            <TableCell className="text-center">7</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">3</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">6</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">20</TableCell>
          </TableRow>

          {/* B.Tech in Data Science and Artificial Intelligence - Gender Neutral */}
          <TableRow className="bg-white even:bg-gray-100">
            <TableCell className="text-center" rowSpan={2}>
              4181
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              B.Tech. in Data Science and Artificial Intelligence (4 Years)
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              All India
            </TableCell>
            <TableCell className="text-center">Gender-Neutral</TableCell>
            <TableCell className="text-center">44</TableCell>
            <TableCell className="text-center">3</TableCell>
            <TableCell className="text-center">12</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">18</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">9</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">31</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">144</TableCell>
            <TableCell className="text-center" rowSpan={2}>
              120
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              24
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              10
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              5
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              2
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              2
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              5
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              168
            </TableCell>
          </TableRow>
          {/* B.Tech in Data Science and Artificial Intelligence - Female Only */}
          <TableRow className="bg-white even:bg-gray-100">
            <TableCell className="text-center">
              Female-only (supernumerary)
            </TableCell>
            <TableCell className="text-center">8</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">3</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">4</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">7</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">24</TableCell>
          </TableRow>

          {/* B.Tech in AI and Computing - Gender Neutral */}
          <TableRow className="bg-white even:bg-gray-100">
            <TableCell className="text-center" rowSpan={2}>
              New
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              B.Tech. in AI and Computing (4 Years)
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              All India
            </TableCell>
            <TableCell className="text-center">Gender-Neutral</TableCell>
            <TableCell className="text-center">32</TableCell>
            <TableCell className="text-center">4</TableCell>
            <TableCell className="text-center">8</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">12</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">6</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">22</TableCell>
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">102</TableCell>
            <TableCell className="text-center" rowSpan={2}>
              85
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              17
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              8
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              5
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              2
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              2
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              5
            </TableCell>
            <TableCell className="text-center" rowSpan={2}>
              124
            </TableCell>
          </TableRow>
          {/* B.Tech in AI and Computing - Female Only */}
          <TableRow className="bg-white even:bg-gray-100">
            <TableCell className="text-center">
              Female-only (supernumerary)
            </TableCell>
            <TableCell className="text-center">5</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">3</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">5</TableCell>
            <TableCell className="text-center">0</TableCell>
            <TableCell className="text-center">17</TableCell>
          </TableRow>

          {/* Total row */}
          <TableRow className="bg-main hover:bg-main/90 text-white font-semibold">
            <TableCell className="text-center" colSpan={6}>
              Total
            </TableCell>
            <TableCell className="text-center">223</TableCell>
            <TableCell className="text-center">13</TableCell>
            <TableCell className="text-center">60</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">90</TableCell>
            <TableCell className="text-center">3</TableCell>
            <TableCell className="text-center">47</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">160</TableCell>
            <TableCell className="text-center">6</TableCell>
            <TableCell className="text-center">606</TableCell>
            <TableCell className="text-center">505</TableCell>
            <TableCell className="text-center">101</TableCell>
            <TableCell className="text-center">50</TableCell>
            <TableCell className="text-center">26</TableCell>
            <TableCell className="text-center">8</TableCell>
            <TableCell className="text-center">8</TableCell>
            <TableCell className="text-center">20</TableCell>
            <TableCell className="text-center">718</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="text-sm mt-4">
        <p className="text-center text-gray-500">
          Note: Scroll to the right to view the entire table.
        </p>
      </div>
    </div>
  );
}
