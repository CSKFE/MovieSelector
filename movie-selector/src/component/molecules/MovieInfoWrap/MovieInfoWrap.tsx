import OpenDate from "./OpenDate"

type MovieInfoProps = {
  open: string,
}

export default function MovieInfoWrap({ open }: MovieInfoProps) {

  return (
    <>
      <OpenDate open={open} />
    </>
  )
}