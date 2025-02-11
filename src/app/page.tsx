"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ConnectButton,
  CurrencyInput,
  DatePicker,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  Input,
  Label,
  MultiProgressBar,
  ProgressBar,
  RainbowKitConnectButton,
  Slider,
  TextWithCopy,
  Textarea,
} from "@/components/ui";
import { ChangeEvent } from "react";

export default function ComponentsShowcase() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">UI Components</h1>
        <p className="text-foreground/60">
          A showcase of Mento Protocol's UI components with dark mode support.
        </p>
      </div>

      {/* Web3 Components */}
      <Card className="border border-border">
        <CardHeader>
          <CardTitle>Web3 Components</CardTitle>
          <CardDescription>Blockchain interaction components</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormItem>
            <FormLabel>Default Wagmi Button</FormLabel>
            <ConnectButton />
          </FormItem>
          <FormItem>
            <FormLabel>Secondary Wagmi Connect Button</FormLabel>
            <ConnectButton theme="secondary" />
          </FormItem>
          <FormItem>
            <FormLabel>Full Width Wagmi Connect Button</FormLabel>
            <ConnectButton fullWidth theme="tertiary" />
          </FormItem>
          <FormItem>
            <FormLabel>Default RainbowKit Button</FormLabel>
            <RainbowKitConnectButton />
          </FormItem>
        </CardContent>
      </Card>

      {/* Text Input Components */}
      <Card className="border border-border">
        <CardHeader>
          <CardTitle>Text Input Components</CardTitle>
          <CardDescription>Various forms of text input</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormItem>
            <FormLabel>Default Input</FormLabel>
            <FormControl>
              <Input placeholder="Enter text..." />
            </FormControl>
            <FormDescription className="text-foreground/60">
              This is a basic text input field.
            </FormDescription>
          </FormItem>

          <FormItem>
            <FormLabel>Currency Input</FormLabel>
            <FormControl>
              <CurrencyInput
                onChange={(e: string | ChangeEvent<HTMLInputElement>) => {
                  if (typeof e === 'string') {
                    console.log('Value:', e);
                  } else {
                    console.log('Event:', e.target.value);
                  }
                }}
                maxValue="1000"
                symbol="USD"
              />
            </FormControl>
          </FormItem>

          <FormItem>
            <FormLabel>Multiline Input</FormLabel>
            <FormControl>
              <Textarea placeholder="Enter long text..." />
            </FormControl>
          </FormItem>

          <FormItem>
            <FormLabel>Copyable Text</FormLabel>
            <TextWithCopy text="Click to copy this text" />
          </FormItem>
        </CardContent>
      </Card>

      {/* Selection Components */}
      <Card className="border border-border">
        <CardHeader>
          <CardTitle>Selection Components</CardTitle>
          <CardDescription>Components for making choices</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormItem>
            <FormLabel>Toggle</FormLabel>
            <div className="flex items-center space-x-2">
              <Input type="checkbox" id="terms" className="w-4 h-4" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </FormItem>

          <FormItem>
            <FormLabel>Radio Group</FormLabel>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Input type="radio" id="default" name="size" value="default" className="w-4 h-4" />
                <Label htmlFor="default">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type="radio" id="comfortable" name="size" value="comfortable" className="w-4 h-4" />
                <Label htmlFor="comfortable">Comfortable</Label>
              </div>
            </div>
          </FormItem>

          <FormItem>
            <FormLabel>Button Types</FormLabel>
            <div className="flex gap-2">
              <Button>Default</Button>
              <Button className="bg-secondary text-secondary-foreground">Secondary</Button>
              <Button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                Outline
              </Button>
            </div>
          </FormItem>
        </CardContent>
      </Card>

      {/* Date & Time Components */}
      <Card>
        <CardHeader>
          <CardTitle>Date & Time Components</CardTitle>
          <CardDescription>Components for date and time selection</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormItem>
            <FormLabel>Calendar</FormLabel>
            <Calendar
              mode="single"
              selected={new Date()}
              onSelect={(date: Date | undefined) => console.log(date)}
            />
          </FormItem>

          <FormItem>
            <FormLabel>Date Picker</FormLabel>
            <DatePicker onDayClick={(date: Date) => console.log(date)}>
              <DatePicker.Button>
                Select a date
              </DatePicker.Button>
              <DatePicker.Panel>
                <div className="p-2">Custom panel content</div>
              </DatePicker.Panel>
            </DatePicker>
          </FormItem>
        </CardContent>
      </Card>

      {/* Progress Components */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Components</CardTitle>
          <CardDescription>Components showing progress</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormItem>
            <FormLabel>Progress Bar</FormLabel>
            <ProgressBar current={60} max={100} />
          </FormItem>

          <FormItem>
            <FormLabel>Multi Progress Bar</FormLabel>
            <MultiProgressBar
              values={[
                { progress: 30, type: "success" },
                { progress: 20, type: "info" },
                { progress: 10, type: "warning" },
              ]}
            />
          </FormItem>
        </CardContent>
      </Card>

      {/* Interactive Components */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Components</CardTitle>
          <CardDescription>Components with user interaction</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormItem>
            <FormLabel>Slider</FormLabel>
            <Slider defaultValue={[50]} max={100} step={1} />
          </FormItem>

          <FormItem>
            <FormLabel>Accordion</FormLabel>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Section 1</AccordionTrigger>
                <AccordionContent>
                  Content for section 1 goes here.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Section 2</AccordionTrigger>
                <AccordionContent>
                  Content for section 2 goes here.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FormItem>
        </CardContent>
      </Card>
    </div>
  );
}
