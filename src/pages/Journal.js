import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Journal() {
  useEffect(() => {
    document.title = "my journey ✈️";
  }, []);
  return (
    <div>
      <p>random life milestones and adventures. find all blogs{" "}
        <a href='https://substack.com/@nicholasdo'target="_blank" class="clickable">here</a>
      </p>
      <p>July 2024</p>
      <ul>
        <li>built personal website</li>
        <li>went to my first concert (IU)</li>
        <li>bought merch @ museum of coke (atlanta)</li>
        <li>finished @ denison</li>
      </ul>
      <p>May/June 2024</p>
      <ul>
        <li>first learned about blockchain</li>
        <li>built first mechanical keyboard</li>
        <li>walked around central park</li>
        <li>tried award-winning bobas (go chicha san chen 🧋) </li>
        <li>got all aespa member cards (go armageddon *ੈ✩‧₊˚)</li>
      </ul>
      <p>Mar/Apr 2024</p>
      <ul>
        <li>transfer into unc!!!!</li>
        <li>won the 1st hackathon @ cornell tech</li>
        <li>spent $100 on haircuts</li>
        <li>got eczema after spring break</li>
      </ul>
      <p>Jan/Feb 2024</p>
      <ul>
        <li>went to the 1st hackathon @ yale health hack</li>
        <li>wore ao dai 1st time</li>
        <li>started watching modern family!!!!</li>
        <li>lost brand new olympus mjuiii @ airport</li>
        <li>ate pizza4ps @ new year</li>
      </ul>
      <p>2022 - 2023</p>
      <ul>
        <li>came back to nyc & philly after 4 years</li>
        <li>worked as barista and librarian</li>
        <li>experienced both swe & consulting interns during summer</li>
        <li>mental suffering</li>
        <li>graduated high school @ hn-ams</li>
        <li>ended my first digital health project </li>
      </ul>
    </div>
  );
}

export default Journal