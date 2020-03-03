import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./Chat.module.scss"
import { Icon } from "@material-ui/core"

import TextCard from "components/TextCard"
import ImageCard from "components/ImageCard"
import BasicCard from "components/BasicCard"
import CarouselCard from "components/CarouselCard"
import QuickCard from "components/QuickCard"

const jsonFormat = {
  version: "2.0",
  template: {
    outputs: [
      // 말묶음하나씩

      // 1. 텍스트카드
      {
        simpleText: {
          text:
            "안녕하세요. 연구소입니다. 간단한 문의나 테스트 등을 해보실 수 있도록 챗봇을 통해서 안내하고 있어요 (하하)"
        }
      },

      // 2. 이미지카드
      {
        simpleImage: {
          imageUrl: "",
          altText: ""
        }
      },

      // 3. 캐러셀 카드
      {
        carousel: {
          type: "basicCard",
          items: [
            {
              title: "",
              description: "",
              thumbnail: {
                imageUrl: "https://cloudturing.com/static/dylab/upload/9383/i_lk8gb61asgag1.jpg",
                link: {},
                width: 600,
                height: 600,
                fixedRatio: true
              },
              buttons: [
                {
                  label: "회사 소개",
                  action: "message",
                  messageText: "회사 소개"
                },
                {
                  label: "만든 챗봇들",
                  action: "message",
                  messageText: "만든 챗봇들"
                }
              ]
            }
          ]
        }
      },

      // 4. 베이직 카드
      {
        basicCard: {
          title: "",
          description: "",
          thumbnail: {
            width: 600,
            height: 600,
            fixedRatio: true,
            link: {
              ios: "ㄴㅇㄹ",
              win: "ㅇㄹㄴ",
              pc: "ㄴㅇㄹ"
            }
          },
          buttons: [
            {
              label: "",
              action: "webLink",
              webLinkUrl: ""
            }
          ]
        }
      }
    ],
    quickReplies: [
      {
        action: "block",
        label: "뒤로가기",
        blockId: "sadlkfjsdlkfjdsalfjadslk"
      },
      {
        action: "message",
        label: "처음으로"
      }
    ]
  }
}

const Chat = props => {
  const [outputs, setOutputs] = useState([
    {
      simpleText: {
        text: "안녕하세요. "
      }
    }
  ])
  const [quickBtn, setQuickBtn] = useState([])

  const handleChange = (i, e, type) => {
    console.log(i, e.target.value)
    const output = outputs[i]
    switch (type) {
      case 1:
        output.simpleText.text = e.target.value
        break
      case 2:
        output.simpleImage[e.target.name] = e.target.value
        break
      case 3:
        output.basicCard[e.target.name] = e.target.value
        break
      default:
        break
    }

    setOutputs([...outputs.slice(0, i), output, ...outputs.slice(i + 1)])
  }

  const addCard = type => {
    let newCard
    switch (type) {
      case 1:
        newCard = {
          simpleText: {
            text: ""
          }
        }
        break
      case 2:
        newCard = {
          simpleImage: {
            imageUrl: "",
            altText: ""
          }
        }
        break
      case 3:
        newCard = {
          basicCard: {
            title: "",
            description: "",
            // option
            thumbnail: {
              width: 600,
              height: 600,
              fixedRatio: true,
              link: {
                ios: "ㄴㅇㄹ",
                win: "ㅇㄹㄴ",
                pc: "ㄴㅇㄹ"
              }
            },
            //  option
            buttons: [
              {
                label: "",
                action: "webLink",
                webLinkUrl: ""
              }
            ]
          }
        }
        break
      case 4:
        newCard = {
          carousel: {
            type: "basicCard",
            items: [
              {
                title: "",
                description: "",
                thumbnail: {
                  imageUrl: "https://cloudturing.com/static/dylab/upload/9383/i_lk8gb61asgag1.jpg",
                  link: {},
                  width: 600,
                  height: 600,
                  fixedRatio: true
                },
                buttons: [
                  {
                    label: "회사 소개",
                    action: "message",
                    messageText: "회사 소개"
                  },
                  {
                    label: "만든 챗봇들",
                    action: "message",
                    messageText: "만든 챗봇들"
                  }
                ]
              }
            ]
          }
        }
        break

      case 5:
        newCard = {
          simpleText: {
            text: ""
          }
        }
        break

      default:
    }

    setOutputs([...outputs, newCard])
  }

  const handleDeleteCard = i => {
    setOutputs([...outputs.slice(0, i), ...outputs.slice(i + 1)])
  }

  return (
    <div className={styles.chatWrapper}>
      <div>
        <textarea
          className={styles.textarea}
          name=""
          id=""
          cols="30"
          rows="10"
          value={JSON.stringify(outputs)}
          readOnly
        ></textarea>
        <div className={styles.btnWrapper}>
          <button className={styles.btn}>복사하기</button>
        </div>
      </div>
      <div className={styles.controlWrapper}>
        {outputs.map((output, i) => {
          // console.log(output, Object.keys(output)[0])
          switch (Object.keys(output)[0]) {
            case "simpleText":
              return (
                <TextCard
                  handleChange={e => handleChange(i, e, 1)}
                  value={output}
                  key={i}
                  handleDeleteCard={e => handleDeleteCard(i, e)}
                />
              )
            case "simpleImage":
              return (
                <ImageCard
                  handleChange={e => handleChange(i, e, 2)}
                  value={output}
                  key={i}
                  handleDeleteCard={e => handleDeleteCard(i, e)}
                />
              )
            case "basicCard":
              return (
                <BasicCard
                  handleChange={e => handleChange(i, e, 3)}
                  value={output}
                  key={i}
                  handleDeleteCard={e => handleDeleteCard(i, e)}
                />
              )
            case "carousel":
              return <CarouselCard />
            case "quickReplies":
              return <QuickCard />
            default:
              break
          }
        })}

        <div className={styles.btnWrapper}>
          <button className={styles.btn} onClick={() => addCard(1)}>
            텍스트카드
          </button>
          <button className={styles.btn} onClick={() => addCard(2)}>
            이미지카드
          </button>
          <button className={styles.btn} onClick={() => addCard(3)}>
            베이직카드
          </button>
          <button className={styles.btn} onClick={() => addCard(4)}>
            캐러셀카드
          </button>{" "}
          <button className={styles.btn} onClick={() => addCard(5)}>
            퀵버튼
          </button>
        </div>
      </div>
    </div>
  )
}

Chat.propTypes = {
  // bla: PropTypes.string,
}

Chat.defaultProps = {
  // bla: 'test',
}

export default Chat
