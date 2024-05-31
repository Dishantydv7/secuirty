
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Guidelines() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-black shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">TERMS AND CONDITIONS</h1>
            <ul className="list-decimal pl-5 space-y-2 mb-6">
                <li>The Loudspeaker should be box type and its size should be maximum 15 inches X 10 inches.</li>
                <li>Maximum capacity of the loudspeaker should be 35 watts.</li>
                <li>As per, Noise pollution (regulation and control) Rules – 2000;</li>
            </ul>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[250px]"> </TableHead>
                            <TableHead className="w-[250px]"> </TableHead>
                            <TableHead className="w-[200px] pl-3 "> Limits in - dB (A) *</TableHead>
                            <TableHead className="w-[200px]">
                            </TableHead>
                            <TableHead className="w-[100px]"> </TableHead>
                            <TableHead className="w-[100px]"> </TableHead>
                        </TableRow>
                        <TableRow>
                            <TableHead className="w-[150px]">Area Code</TableHead>
                            <TableHead className="w-[250px]">Category of Area / Zone</TableHead>
                            <TableHead className="w-[200px]">Day Time</TableHead>
                            <TableHead className="w-[200px]">
                               Night Time
                            </TableHead>
                            <TableHead className="w-[100px]"> </TableHead>
                            <TableHead className="w-[100px]"> </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>(A)</TableCell>
                            <TableCell>Industrial area</TableCell>
                            <TableCell>75</TableCell>
                            <TableCell>70</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>(B)</TableCell>
                            <TableCell>Commercial area</TableCell>
                            <TableCell>65</TableCell>
                            <TableCell>55</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>(C)</TableCell>
                            <TableCell>Residential area</TableCell>
                            <TableCell>55</TableCell>
                            <TableCell>45</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>(D)</TableCell>
                            <TableCell>Silence Zone</TableCell>
                            <TableCell>50</TableCell>
                            <TableCell>40</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className="mt-6">
                <p className="mb-2">Note:</p>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>Day time shall mean from 6.00 a.m. to 10.00 p.m.</li>
                    <li>Night time shall mean from 10.00 p.m. to 6.00 a.m.</li>
                    <li>
                        Silence zone is an area comprising not less than 100 metres around hospitals, educational institutions,
                        courts, religious places or any other area which is declared as such by the competent authority.
                    </li>
                    <li>
                        Mixed categories of areas may be declared as one of the four above mentioned categories by the competent
                        authority.
                    </li>
                </ol>
                <p className="mt-4">
                    * dB(A) Leq denotes the time weighted average of the level of sound in decibels on scale A which is relatable
                    to human hearing. &quot;A&quot;, in dB(A) Leq, denotes the frequency weighting in the measurement of noise and
                    corresponds to frequency response characteristics of the human ear.
                </p>
                <p className="italic mt-2">Leq: It is an energy mean of the noise level over a specified period.</p>
            </div>
        </div>
    )
}