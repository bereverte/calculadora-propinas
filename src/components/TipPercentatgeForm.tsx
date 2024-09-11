const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
]

type TipPercentatgeFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>
  tip: number
}

export default function TipPercentatgeForm({ setTip, tip }: TipPercentatgeFormProps) {
  return (
    <div>
      <h3 className="font-bold text-2xl mb-5">Propina:</h3>
      <form action="">
        {tipOptions.map(tipOption => (
          <div key={tipOption.id} className="mb-1 flex gap-2">
            <label htmlFor="{tipOption.id}">{tipOption.label}</label>
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={e => setTip(+e.target.value)}
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
