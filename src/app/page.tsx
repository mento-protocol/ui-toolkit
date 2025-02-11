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
import { mentoRainbowKitProviderConfig, mentoWagmiConfig, rainbowKitTheme } from "@/config";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ChangeEvent } from "react";
import { WagmiProvider } from "wagmi";

export default function ComponentsShowcase() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-8">UI Components Showcase</h1>

      {/* Web3 Components */}
      <Card>
        <CardHeader>
          <CardTitle>Web3 Components</CardTitle>
          <CardDescription>Blockchain interaction components</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          {/* <WagmiProvider config={mentoWagmiConfig}>
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
            <RainbowKitProvider 
              theme={rainbowKitTheme.darkMode}
              {...mentoRainbowKitProviderConfig}
            >
              <FormItem>
                <FormLabel>Default RainbowKit Button</FormLabel>
                <RainbowKitConnectButton />
              </FormItem>
            </RainbowKitProvider>
          </WagmiProvider> */}
        </CardContent>
      </Card>

      {/* Text Input Components */}
      <Card>
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
      <Card>
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
              <Button className="bg-secondary">Secondary</Button>
              <Button className="border border-input">Outline</Button>
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
