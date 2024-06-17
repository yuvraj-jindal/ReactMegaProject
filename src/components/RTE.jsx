/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {Editor } from "@tinymce/tinymce-react"
import {Controller } from "react-hook-form"


export default function RTE({name,control, label, defaultValue=""})  {

    return(
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1 text-[#6b6b70] font-medium">{label}</label>}

            <Controller 
                name = {name || "content"}
                control={control}
                render={({field: {onChange}}) => (
                    <Editor 
                        apiKey='xg4nnnsxruwohl3j9fe4yz98l1rxg70m2qlq67g4vb2km67x'
                        initialValue={defaultValue}
                        init={{
                            initialValue: defaultValue,
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar:
                            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}