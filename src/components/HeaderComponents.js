import React, { Component } from 'react'

export default class HeaderComponents extends Component {
  render() {
    return (
      <div class=" bg-dark text-center text-primary d-flex justify-content-around py-3">
        <p class="">Start Bootstrap</p>
        {/* <nav>
          <ul class="d-flex ">
            <li class="px-3">
              <a>Home</a>
            </li>
            <li class="px-3">
              <a>Home</a>
            </li>
            <li class="px-3">
              <a>Home</a>
            </li>
            <li class="px-3">
              <a>Home</a>
            </li>
          </ul>
        </nav> */}
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    )
  }
}
