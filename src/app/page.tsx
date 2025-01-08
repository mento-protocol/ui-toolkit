import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  RainbowKitConnectButton,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  Input,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  Switch,
  Textarea,
} from "@/components/ui";

export default function InputComponentsShowcase() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Input Components</h1>
        <RainbowKitConnectButton />
      </div>
      {/* Text Inputs */}
      <Card>
        <CardHeader>
          <CardTitle>Text Inputs</CardTitle>
          <CardDescription>Basic text input components</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormItem>
            <FormLabel>Default Input</FormLabel>
            <FormControl>
              <Input placeholder="Enter text..." />
            </FormControl>
            <FormDescription>
              A standard single-line text input.
            </FormDescription>
          </FormItem>

          <FormItem>
            <FormLabel>Disabled Input</FormLabel>
            <FormControl>
              <Input disabled placeholder="Disabled input" />
            </FormControl>
          </FormItem>

          <FormItem>
            <FormLabel>With Icon</FormLabel>
            <div className="relative">
              <Input placeholder="Search..." />
              <span className="absolute right-3 top-2.5 text-muted-foreground">
                🔍
              </span>
            </div>
          </FormItem>

          <FormItem>
            <FormLabel>Multiline Input</FormLabel>
            <FormControl>
              <Textarea placeholder="Enter long text..." />
            </FormControl>
          </FormItem>
        </CardContent>
      </Card>

      {/* Selection Inputs */}
      <Card>
        <CardHeader>
          <CardTitle>Selection Inputs</CardTitle>
          <CardDescription>Components for selecting options</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormItem>
            <FormLabel>Checkbox</FormLabel>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <FormLabel htmlFor="terms">Accept terms and conditions</FormLabel>
            </div>
          </FormItem>

          <FormItem>
            <FormLabel>Radio Group</FormLabel>
            <RadioGroup defaultValue="comfortable">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="default" />
                  <FormLabel htmlFor="default">Default</FormLabel>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="comfortable" />
                  <FormLabel htmlFor="comfortable">Comfortable</FormLabel>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="compact" />
                  <FormLabel htmlFor="compact">Compact</FormLabel>
                </div>
              </div>
            </RadioGroup>
          </FormItem>

          <FormItem>
            <FormLabel>Select Dropdown</FormLabel>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
        </CardContent>
      </Card>

      {/* Range Inputs */}
      <Card>
        <CardHeader>
          <CardTitle>Range Inputs</CardTitle>
          <CardDescription>
            Components for selecting ranges and toggles
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormItem>
            <FormLabel>Slider</FormLabel>
            <Slider defaultValue={[50]} max={100} step={1} />
            <FormDescription>
              Drag to select a value between 0 and 100
            </FormDescription>
          </FormItem>

          <FormItem>
            <div className="flex items-center justify-between">
              <FormLabel>Toggle Switch</FormLabel>
              <Switch />
            </div>
            <FormDescription>Toggle between two states</FormDescription>
          </FormItem>
        </CardContent>
      </Card>
    </div>
  );
}
