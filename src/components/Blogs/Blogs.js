import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="font-bold text-center mt-4">Question And Answer</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-10 gap-10">
        <div className="border-2 rounded-lg shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px]">
          <h5 className="font-bold m-2 p-2 mb-3 rounded-md bg-[#212529] text-white h-24 flex items-center justify-center">
            Question 1 : Difference Between JavaScript and NodeJS?
          </h5>
          <span className="text-lg flex justify-start font-bold px-3">
            Answer:
          </span>
          <h6 className="text-justify px-5 pb-3">
            JavaScript is a lightweight, cross-platform, interpreted scripting
            programming language that is primarily used for client-side
            scripting. It's built into both Java and HTML. On the other hand,
            Node. js is a server-side scripting language based on the Google
            Chrome V8 engine.
          </h6>
        </div>
        <div className="border-2 rounded-lg shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px]">
          <h5 className="font-bold m-2 p-2 mb-3 rounded-md bg-[#212529] text-white flex items-center justify-center h-24">
            Question 2 : When should we use Node JS and when should we use
            MongoDB?
          </h5>
          <span className="text-lg flex justify-start font-bold px-3">
            Answer:
          </span>
          <h6 className="text-justify px-5 pb-3">
            <strong>Node JS : </strong> Node JS is basically non-blocking
            JavaScript run time. Node JS is widely used in real time application
            build. For example, in an application, the user sends a request to
            the server very quickly and the server sends data to the user very
            quickly.
            <br />
            <strong>Mongo DB : </strong> We use MongoDBwhen our data does not
            fit well with the schema of the document centric and relational
            database. When I have to compromise on a large scale and when I
            prototype quickly, in all these cases it is better to use the
            Mangodib database and almost everyone does it.
          </h6>
        </div>
        <div className="border-2 rounded-lg shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px]">
          <h5 className="font-bold m-2 p-2 mb-3 rounded-md bg-[#212529] text-white  flex items-center justify-center h-24">
            Question 3 : Difference Between Sql and NoSql Database?
          </h5>
          <span className="text-lg flex justify-start font-bold px-3">
            Answer:
          </span>
          <h6 className="text-justify px-5 pb-3 max-h-46 overflow-auto">
            <strong>Sql :</strong> It is a Relational Database Management System
            (RDBMS) This database has a default schema.This database is not
            suitable for storing classified data.
            <br />
            <strong>Nosql :</strong> It is a Non-relational or distributed
            database system. Their schema is dynamic These databases are most
            commonly used for storing classified data
            <br />
          </h6>
        </div>
        <div className="border-2 rounded-lg shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px]">
          <h5 className="font-bold m-2 p-2 mb-3 rounded-md bg-[#212529] text-white h-24 flex items-center justify-center">
            Question 4 : What is the purpose of JWT and how does it work?
          </h5>
          <span className="text-lg flex justify-start font-bold px-3">
            Answer:
          </span>
          <h6 className="text-justify px-5 pb-3">
            JWT is a token used to enhance security when exchanging data between
            client and server. This allows the server to verify that the person
            requesting the data is the real client.Its function is that when the
            user logs in, one copy of this token is saved in the user's browser
            and another copy is saved in the database. Once the token expires, a
            new token is generated.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
