import React from "react";

const About = () => {
  const commentedText = "// I can, because I did.";
  const commentedText1 =
    "// My vast variety of skills is continuosly expanding.";

  return (
    <div>
      <div className="relative md:left-20 left-5  mt-[100px]">
        <h1 className="font-bold md:text-4xl text-2xl">About&gt;</h1>
        <h2 className="mt-4 md:text-xl  ">
          <span class="text-purple-700">class</span>{" "}
          <span class="text-yellow-500">Olusekun Zainab</span> &nbsp; &#123;
        </h2>
        <h2 className="text-gray-400 pt-1 pl-4 md:text-xl"> {commentedText}</h2>
        <h2 className="text-gray-400 pt-1 pl-4 md:text-xl">
          {" "}
          {commentedText1}
        </h2>
        <h2 className="md:text-xl  pl-4 pt-2">
          <span class="text-purple-700">constructor</span>&#40; &#41; &nbsp;
          &#123;
        </h2>
        <h2 className="md:text-xl  pl-8 pt-1">
          <span class="text-red-900">this.</span>
          <span class="text-gray-800">name</span> ={" "}
          <span class="text-green-700">'Olusekun Zainab'</span>
        </h2>
        <h2 className="md:text-xl  pl-8 pt-1">
          <span class="text-red-900">this.</span>
          <span class="text-gray-800">email</span> ={" "}
          <span class="text-green-700">'zayabolusekun@gmail.com'</span>
        </h2>
        <h2 className="md:text-xl  pl-8 pt-1">
          <span class="text-red-900">this.</span>
          <span class="text-gray-800">telno</span> ={" "}
          <span class="text-green-700">0708208809</span>
        </h2>
        <h2 className="md:text-xl  pl-4">&#125;</h2>
        <h2 className="md:text-xl  pl-4 pt-1">
          <span class="text-yellow-500">workExperience</span>&#40; &#41; &nbsp;
          &#123;
        </h2>
        <h2 className="md:text-lg  pl-8 pt-1">
          <span class="text-purple-700">return</span>&nbsp; &#91;
        </h2>
        <h2 className="md:text-xl  pl-12">
          &#123;{" "}
          <span class="text-green-700">
            '2021 - 2023' : 'Front-desk Administrator / Primestack Motivo'
          </span>
          &#125;
        </h2>

        <h2 className="md:text-xl  pl-12">
          &#123;{" "}
          <span class="text-green-700">
            '2024 - now' : 'Junior Developer / Villextra Technologies'
          </span>
          &#125;
        </h2>
        <h2 className=" pl-8">&#93;</h2>
        <h2 className=" pl-6">&#125;</h2>
        <h2 className="md:text-xl  pl-4 pt-1">
          <span class="text-yellow-500">education</span>&#40; &#41; &nbsp;
          &#123;
        </h2>
        <h2 className="md:text-lg  pl-8 pt-1">
          <span class="text-purple-700">return</span>&nbsp; &#40;
        </h2>
        <h2 className="md:text-xl  pl-12">
          &#123;{" "}
          <span class="text-green-700">
            '2021 - 2025' : 'National Open University , Bachelor of Science -
            Computer Science'
          </span>
          &#125;
        </h2>
        <h2 className="pl-8">&#41;</h2>
        <h2 className=" pl-6">&#125;</h2>
        <h2 className="md:text-xl  pl-4 pt-1">
          <span class="text-yellow-500">skills</span>&#40; &#41; &nbsp; &#123;
        </h2>
        <h2 className="md:text-lg  pl-8 pt-1">
          <span class="text-purple-700">return</span>&nbsp; &#91;{" "}
          <span class="text-green-700">
            'HTML', 'CSS' , 'JS', 'Tailwind', 'Bootstrap', 'React', 'GIT',
            'ExpressJs', 'PostgresSql', 'Sql', 'C#'
          </span>
          &#93;
        </h2>
        <h2 className="md:text-xl  pl-6">&#125;</h2>
      </div>
    </div>
  );
};

export default About;
