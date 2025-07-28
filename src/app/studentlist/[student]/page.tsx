"use client";

export default function Student({params}:{params:{student:string}}){
    console.log(params)
    return(
        <div>
            <h1>
                Student Details
            </h1>
          <p>
            name:{params.student}
          </p>
        </div>

    )
}