import React from 'react'
import './product.css'

const Product = () => {
  return (
    <div className='product'>
      <div className='left__column'>
        <div class="insights">
          <div class="insight__container" id="paragraph__container">
            <div class="insight">
              <h2 class="insight__title">Paragraphs</h2>
              <div class="insight__metrics">
                <span class="material-icons insight__icon" id="check1">done</span>
                <h3 class="insight__number" id="paragraphs">0</h3>
              </div>
            </div>
            <div>
              <div class="insight__slider">
                <div class="slider__rectangle" id="paragraph__slider"></div>
              </div>
            </div>
            <div class="slider__gradient paragraph__gradient"></div>
          </div>
          <div class="insight__container" id="question__container">
            <div class="insight">
              <h2 class="insight__title">Questions</h2>
              <div class="insight__metrics">
                <span class="material-icons insight__icon" id="check2">done</span>
                <h3 class="insight__number" id="questions">0</h3>
              </div>
            </div>
            <div>
              <div class="insight__slider">
                <div class="slider__rectangle" id="question__slider"></div>
              </div>
            </div>
            <div class="slider__gradient question__gradient"></div>
          </div>
          <div class="insight__container" id="grade__container">
            <div class="insight">
              <h2 class="insight__title">Grade Level</h2>
              <div class="insight__metrics">
                <span class="material-icons insight__icon" id="check3">done</span>
                <h3 class="insight__number" id="grade">0</h3>
              </div>
            </div>
            <div>
              <div class="insight__slider">
                <div class="slider__rectangle" id="grade__slider"></div>
              </div>
            </div>
            <div class="slider__gradient grade__gradient"></div>
          </div>
          <div class="insight__container" id="wording__container">
            <div class="insight">
              <h2 class="insight__title">Wording</h2>
              <div class="insight__metrics">
                <span class="material-icons insight__icon" id="check4">done</span>
                <span class="material-symbols-outlined insight__warning" id="warning">warning</span>
                <h3 class="insight__number" id="words">0</h3>
              </div>
            </div>
            <div>
              <div class="insight__slider">
                <div class="slider__rectangle" id="word__slider"></div>
              </div>
            </div>
            <div class="slider__gradient word__gradient"></div>
          </div>
        </div>
        <textarea placeholder='Type your invitation note here'></textarea>
      </div>
      <div className='right__column'>
        
      </div>
    </div>
  )
}

export default Product