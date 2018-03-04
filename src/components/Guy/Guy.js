import React, { PureComponent, Fragment } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import * as guyCondition from '../../constants/guyCondition'
import './Guy.scss'

class Guy extends PureComponent {
  static propTypes = {
    condition: PropTypes.number.isRequired,
  }

  renderFace = () => (
    <g id="face" className="guy__face">
      <path d="M8.5,22.5 L28,22.5" id="Path" stroke="#F7AC4F" strokeWidth="2" fill="#FFDCB1" />
      {this.renderEyes()}
    </g>
  )

  renderCap = () => (
    <g id="cap" className="guy__cap" strokeWidth="2">
      <ellipse id="Oval-2" stroke="#88796A" fill="#A08F7D" cx="52" cy="16.5" rx="52" ry="16.5" />
      <path
        d="M29.3780715,33 L75.3780715,33 C78.6177063,37.7441208 78.6177063,41.0317302 75.3780715,42.8628281 C70.5186192,45.609475 63.4038988,47.8628281 51.9038988,47.8628281 C40.4038988,47.8628281 36.1342145,46.6815176 29.3780715,42.8628281 C24.8739762,40.3170351 24.8739762,37.0294257 29.3780715,33 Z"
        id="Path"
        stroke="#000000"
        fill="#000000"
      />
      <path
        d="M21.5,26.8576429 L21.5,38.5065844 C31.7248433,40.8355281 41.89151,42 52,42 C62.10849,42 72.2751567,40.8355281 82.5,38.5065844 L82.5,26.8576429 C72.0685702,24.285881 61.9019035,23 52,23 C42.0980965,23 31.9314298,24.285881 21.5,26.8576429 Z"
        id="Path-2"
        stroke="#25457F"
        fill="#375A99"
      />
    </g>
  )

  renderEyes = () => {
    const { condition } = this.props

    return (
      <g id="eyes">
        <g id="eye">
          <circle id="Oval-3" stroke="#020202" fill="#000000" cx="4" cy="5" r="3" />
          <circle id="Oval-4" stroke="#FFFFFF" fill="#FFFFFF" cx="3" cy="3" r="1" />
          {
            condition === guyCondition.WRITING_PASSWORD && (
              <Fragment>
                <path d="M0.5,1.5 L7.5,1.5" id="Line" stroke="#FCCD92" strokeWidth="2" strokeLinecap="square" />
                <path d="M0.5,8.5 L7.5,8.5" id="Line" stroke="#FCCD92" strokeWidth="2" strokeLinecap="square" />
              </Fragment>
            )
          }
        </g>
        <g id="eye" transform="translate(28.000000, 0.000000)">
          <circle id="Oval-3" stroke="#020202" fill="#000000" cx="4" cy="5" r="3" />
          <circle id="Oval-4" stroke="#FFFFFF" fill="#FFFFFF" cx="3" cy="3" r="1" />
          {
            condition === guyCondition.WRITING_PASSWORD && (
              <Fragment>
                <path d="M0.5,1.5 L7.5,1.5" id="Line" stroke="#FCCD92" strokeWidth="2" strokeLinecap="square" />
                <path d="M0.5,8.5 L7.5,8.5" id="Line" stroke="#FCCD92" strokeWidth="2" strokeLinecap="square" />
              </Fragment>
            )
          }

        </g>
      </g>
    )
  }

  renderNotepad = () => {
    const { condition } = this.props

    return (
      <g
        id="notepad"
        className={classNames('guy__notepad', { 'guy__notepad--rise': condition === guyCondition.WRITING_PASSWORD })}
      >
        <g
          id="pen"
          transform="translate(45.564964, 21.500000) rotate(-54.000000) translate(-45.564964, -21.500000) "
        >
          <use fill="#000000" fillRule="evenodd" xlinkHref="#path-8" />
          <path
            stroke="#000000"
            strokeWidth="1"
            d="M21.5,20.5 L21.5,22.5 C50.0004344,22.5 50.0751471,22.5 63,22.5 C66.8311754,22.5 69.5257248,21.8752409 69.6302532,21.4255631 C69.6225126,21.4585113 69.6059405,21.4402191 69.4958273,21.3689228 C69.2730601,21.224685 68.890596,21.0804415 68.3676885,20.9549437 C67.1578902,20.6645921 65.3277832,20.5 63,20.5 C49.414204,20.5 49.3338119,20.5 21.5000088,20.5 Z"
          />
        </g>
        <g id="paper">
          <use fill="#FAFDC5" fillRule="evenodd" xlinkHref="#path-9" />
          <rect stroke="#D0DA1D" strokeWidth="2" x="1" y="2" width="44" height="54" />
        </g>
      </g>
    )
  }

  render() {
    return (
      <div className="guy">
        <svg
          width="124px"
          height="250px"
          viewBox="0 0 124 250"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <rect id="path-1" x="55" y="90" width="15" height="30" />
            <ellipse id="path-2" cx="62" cy="54.5" rx="34" ry="37.5" />
            <rect id="path-3" x="10" y="9" width="21" height="40" />
            <polygon
              id="path-4"
              points="9.24968595 28.6496798 24.8236227 32.0757431 31.7003263 51.1003202 12.5044968 44.394869"
            />
            <polygon
              id="path-5"
              points="14.6490991 12.4490869 24.6490991 12.4490869 26.4743368 24.2743246 14.6490991 22.4490869"
            />
            <rect id="path-6" x="1" y="5" width="33" height="10" />
            <rect id="path-7" x="1" y="5" width="33" height="10" />
            <path
              d="M21,20 C42.3333333,20 56.3333333,20 63,20 C73,20 72,23 63,23 C57,23 43,23 21,23 L21,20 Z"
              id="path-8"
            />
            <rect id="path-9" x="0" y="1" width="46" height="56" />
          </defs>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="ears" transform="translate(19.000000, 50.000000)" stroke="#FCCD92" strokeWidth="2">
              <g
                id="ear"
                transform="translate(76.500000, 9.500000) scale(-1, 1) translate(-76.500000, -9.500000) translate(67.000000, 0.000000)"
              >
                <circle id="Oval-5" fill="#FFDCB1" cx="9.5" cy="9.5" r="9.5" />
                <path
                  d="M6,5 C8,6.5 9,8 9,9.5 C9,11 8,12.5 6,14"
                  id="Path-4"
                  transform="translate(7.500000, 9.500000) scale(-1, 1) translate(-7.500000, -9.500000) "
                />
              </g>
              <g id="ear">
                <circle id="Oval-5" fill="#FFDCB1" cx="9.5" cy="9.5" r="9.5" />
                <path
                  d="M6,5 C8,6.5 9,8 9,9.5 C9,11 8,12.5 6,14"
                  id="Path-4"
                  transform="translate(7.500000, 9.500000) scale(-1, 1) translate(-7.500000, -9.500000) "
                />
              </g>
            </g>
            <g id="suit" transform="translate(1.000000, 100.000000)" fill="#A08F7D" stroke="#88796A" strokeWidth="2">
              <polygon id="Triangle" points="61 0 122 18.4697696 122 89 61 89 0 89 0 18.4697696" />
            </g>
            <g id="Neck">
              <use fill="#FFDCB1" fillRule="evenodd" xlinkHref="#path-1" />
              <rect stroke="#FCCD92" strokeWidth="2" x="56" y="91" width="13" height="28" />
            </g>
            <g id="Oval">
              <use fill="#FFDCB1" fillRule="evenodd" xlinkHref="#path-2" />
              <ellipse stroke="#FCCD92" strokeWidth="2" cx="62" cy="54.5" rx="33" ry="36.5" />
            </g>
            {this.renderFace()}
            {this.renderCap()}
            <g id="shirt" transform="translate(42.000000, 102.000000)">
              <g id="Rectangle">
                <use fill="#B1A683" fillRule="evenodd" xlinkHref="#path-3" />
                <rect stroke="#A69B7B" strokeWidth="2" x="11" y="10" width="19" height="38" />
              </g>
              <g
                id="Rectangle-3"
                transform="translate(20.475006, 39.875000) rotate(45.000000) translate(-20.475006, -39.875000) "
              >
                <use fill="#69634B" fillRule="evenodd" xlinkHref="#path-4" />
                <path
                  stroke="#5F5A44"
                  strokeWidth="1"
                  d="M9.89545405,29.303696 L12.9368014,44.0162529 L30.8727252,50.2815961 L24.4470724,32.5048626 L9.89545405,29.303696 Z"
                />
              </g>
              <g
                id="Rectangle-2"
                transform="translate(20.561718, 18.361706) rotate(45.000000) translate(-20.561718, -18.361706) "
              >
                <use fill="#69634B" fillRule="evenodd" xlinkHref="#path-5" />
                <path
                  stroke="#5F5A44"
                  strokeWidth="1"
                  d="M15.1490991,12.9490869 L15.1490991,22.0203414 L25.8760732,23.676061 L24.2203536,12.9490869 L15.1490991,12.9490869 Z"
                />
              </g>
              <polygon
                id="Path-6"
                stroke="#A69B7B"
                strokeWidth="2"
                fill="#B1A683"
                points="11.3275727 0 20 9.5886035 11.3275727 18 0 9.5886035"
              />
              <polygon
                id="Path-6"
                stroke="#A69B7B"
                strokeWidth="2"
                fill="#B1A683"
                transform="translate(31.000000, 9.000000) scale(-1, 1) translate(-31.000000, -9.000000) "
                points="32.3275727 0 41 9.5886035 32.3275727 18 21 9.5886035"
              />
            </g>
            <g id="collar" transform="translate(34.000000, 100.000000)" stroke="#88796A" strokeWidth="2">
              <g
                id="group"
                transform="translate(15.399994, 33.500000) scale(-1, 1) translate(-15.399994, -33.500000) translate(0.399994, 0.000000)"
                fill="#A08F7D"
              >
                <polygon id="Path-3" points="10.137931 0 21.0541872 5.71616003 30 26.7413841 2 42" />
                <path
                  d="M6.65780773,19 L25,38.5907493 L5.41306012,63.490963 C3.60616233,67.4658664 2.32299449,67.4658664 1.56355659,63.490963 C0.804118699,59.5160595 0.804118699,52.7999496 1.56355659,43.3426334 L6.65780773,19 Z"
                  id="Path-5"
                />
              </g>
              <g id="group" transform="translate(22.000000, 0.000000)" fill="#A08F7D">
                <polygon
                  id="Path-3"
                  points="14.7664185 0 25.586731 5.75390625 34.4539185 26.9179688 6.70001221 42.2773438"
                />
                <path
                  d="M11.9453125,19.7695312 L30.1210937,38.2851562 C10.6120159,63.2123199 0.695795442,75.8824855 0.372432519,76.2956532 C0.0490695962,76.7088209 -0.0560429643,76.7088209 0.0570948377,76.2956532 L0.0570948377,74.5197532 L6.89727937,43.0178383 L11.9453125,19.7695312 Z"
                  id="Path-5"
                />
              </g>
              <path
                d="M22.1000061,74.7421875 C22.1000061,81.1820129 22.1000061,85.8486795 22.1000061,88.7421875"
                id="Path-7"
              />
            </g>
            <g id="pagon" transform="translate(87.000000, 106.000000)">
              <g
                id="Rectangle-4"
                transform="translate(17.500000, 10.000000) rotate(17.000000) translate(-17.500000, -10.000000) "
              >
                <use fill="#A49380" fillRule="evenodd" xlinkHref="#path-6" />
                <rect stroke="#88796A" strokeWidth="2" x="2" y="6" width="31" height="8" />
              </g>
              <rect
                id="Rectangle-5"
                stroke="#375A99"
                transform="translate(17.859610, 8.726199) rotate(17.000000) translate(-17.859610, -8.726199) "
                x="3.78961007"
                y="8.72619887"
                width="28.1399994"
                height="1"
              />
              <rect
                id="Rectangle-5"
                stroke="#375A99"
                transform="translate(17.079523, 11.238163) rotate(17.000000) translate(-17.079523, -11.238163) "
                x="3.00952305"
                y="11.2381627"
                width="28.1399994"
                height="1"
              />
            </g>
            <g
              id="pagon"
              transform="translate(19.500000, 116.000000) scale(-1, 1) translate(-19.500000, -116.000000) translate(2.000000, 106.000000)"
            >
              <g
                id="Rectangle-4"
                transform="translate(17.500000, 10.000000) rotate(17.000000) translate(-17.500000, -10.000000) "
              >
                <use fill="#A49380" fillRule="evenodd" xlinkHref="#path-7" />
                <rect stroke="#88796A" strokeWidth="2" x="2" y="6" width="31" height="8" />
              </g>
              <rect
                id="Rectangle-5"
                stroke="#375A99"
                transform="translate(17.859610, 8.726199) rotate(17.000000) translate(-17.859610, -8.726199) "
                x="3.78961007"
                y="8.72619887"
                width="28.1399994"
                height="1"
              />
              <rect
                id="Rectangle-5"
                stroke="#375A99"
                transform="translate(17.079523, 11.238163) rotate(17.000000) translate(-17.079523, -11.238163) "
                x="3.00952305"
                y="11.2381627"
                width="28.1399994"
                height="1"
              />
            </g>
            {this.renderNotepad()}
          </g>
        </svg>
      </div>
    )
  }
}

export default Guy
