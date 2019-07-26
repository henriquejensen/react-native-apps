import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from "react-navigation";

import { Button, ButtonContainer } from "../components/Button";
import Alert from "../components/Alert";

type AnswerType = {
  id: string;
  text: string;
  correct?: boolean;
};

type QuizProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

export default function Quiz({ navigation }: QuizProps) {
  const [activeQuestionIndex, setActiveQuestionIndex] = React.useState(0);
  const QUESTIONS = navigation.getParam("questions", []);
  const theme = navigation.getParam("color", "");
  const question = QUESTIONS[activeQuestionIndex];
  const [correctCount, setCorrectCount] = React.useState(0);
  const [answerCorrect, setAnswerCorrect] = React.useState(false);
  const [answered, setAnswered] = React.useState(false);
  const [totalCount, setTotalCount] = React.useState(QUESTIONS.length);

  React.useEffect(() => {
    let timer = null;
    if (correctCount) {
      setTimeout(() => {
        if (activeQuestionIndex < totalCount - 1) {
          setActiveQuestionIndex(
            activeQuestionIndex => activeQuestionIndex + 1
          );
        } else {
          setActiveQuestionIndex(0);
        }
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [correctCount]);

  React.useEffect(() => {
    setAnswerCorrect(false);
    setAnswered(false);
  }, [activeQuestionIndex]);

  const handleAnswer = (correct: boolean) => {
    setCorrectCount(correctCount => correctCount + 1);
    setAnswerCorrect(correct);
    setAnswered(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme }]}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Text style={styles.text}>{question.question}</Text>
          <ButtonContainer>
            {question.answers.map((answer: AnswerType) => {
              return (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => handleAnswer(answer.correct)}
                />
              );
            })}
          </ButtonContainer>
        </View>

        <Text style={styles.text}>{`${correctCount}/${totalCount}`}</Text>
      </SafeAreaView>
      <Alert correct={answerCorrect} visible={answered} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3bB1f0",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safeArea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  }
});
