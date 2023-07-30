import { OpenDay } from "./styles";

type OpenDateProps = {
  open: string
}

export default function OpenDate({ open }: OpenDateProps) {
  return (
    <OpenDay>
      {`개봉일: ${open}`}
    </OpenDay>
  )
}