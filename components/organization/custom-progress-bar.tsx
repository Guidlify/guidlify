const CustomProgressBar = ({ value, max }: { value: number; max: number }) => {
  const percentage = (value / max) * 100

  return (
    <div className="relative h-4 w-full overflow-hidden rounded-sm bg-gray-200">
      <div
        style={{ width: `${percentage}%` }}
        className="h-full rounded-sm bg-violet-700"
      />
    </div>
  )
}

export default CustomProgressBar
