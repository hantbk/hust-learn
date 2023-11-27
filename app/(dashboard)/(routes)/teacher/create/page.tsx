"use client";

import * as z from "zod";
import axios from "axios";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

import {
    Form,
    FormControl,
    FormLabel,
    FormDescription,
    FormField,
    FormMessage,
    FormItem
} from "@/components/ui/form";
import Link from "next/link";

const formSchema = z.object({
    title: z.string().min(1, {message: "Title is required"}),
})

const CreatePage = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        }
    })
    const {isSubmitting, isValid} = form.formState;

    const onSubmit = async (value: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post("/api/course", value);
            router.push(`/teacher/courses/${response.data.id}`);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
            <div>
                <h1 className="text-2xl">
                    Name your course
                </h1>
                <p className="text-sm text-slate-600">
                    Choose a name that describes the topic of your course.Don&apos;t worry, you can change this later.
                </p>
                <Form {...form}>
                    <form 
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 mt-8"
                    >
                    <FormField
                        control = {form.control}
                        name = "title"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Course title
                                </FormLabel>
                                <FormControl>
                                    <Input 
                                        disabled={isSubmitting}
                                        placeholder="Course title"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Enter a title that describes your course
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center gap-x-2">
                        <Link href = "/">
                            <Button 
                                type="button"
                                variant = "default"
                                className="w-full"
                            >
                                Cancel
                            </Button>
                        </Link>
                        <Button
                            type="submit"
                            disabled={!isValid || isSubmitting}
                        >
                            Continue
                        </Button>
                    </div>
                    </form>
                </Form>
            </div>
        </div>
     );
}
 
export default CreatePage;