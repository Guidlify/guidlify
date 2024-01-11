import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const CreateEvent = () => {
  return (
    <div className="xs:justify-center mt-4 flex items-center md:mt-0 md:mt-[-30px] md:w-full md:justify-end">
      <Button className="bg-violet-500">
        <Icons.plusSquare className="mr-2 h-4 w-4 shrink-0" />
        Create Event
      </Button>
      <div className="ml-2 flex items-center justify-center">
        <Button className="bg-violet-500">
          <Icons.gripHorizontal className="h-4 w-4 shrink-0" />
        </Button>
      </div>
    </div>
  )
}

export default CreateEvent
