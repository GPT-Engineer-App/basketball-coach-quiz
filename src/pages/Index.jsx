import { useState } from "react";
import { Box, Button, Container, Heading, Radio, RadioGroup, Stack, Text, useToast } from "@chakra-ui/react";
import { FaBasketballBall } from "react-icons/fa";

const quizQuestions = [
  {
    question: "What is a 'Zone Defense'?",
    options: ["A man-to-man defense strategy", "A defense covering specific area", "A type of fast break"],
    answer: "A defense covering specific areas",
  },
  {
    question: "What does 'Pick and Roll' mean?",
    options: ["A defensive move", "A type of dribble", "An offensive play involving a screen"],
    answer: "An offensive play involving a screen",
  },
  {
    question: "What is 'Full Court Press'?",
    options: ["A type of basketball court", "An intense defense covering the entire court", "A shooting technique"],
    answer: "An intense defense covering the entire court",
  },
  {
    question: "What is meant by 'Iso' in basketball?",
    options: ["Isolation play", "Isometric exercise", "International sign organization"],
    answer: "Isolation play",
  },
  {
    question: "What is a 'Double Dribble'?",
    options: ["Dribbling with both hands", "Dribbling, stopping, and dribbling again", "A dribbling drill"],
    answer: "Dribbling, stopping, and dribbling again",
  },
  {
    question: "What does 'Box Out' mean?",
    options: ["A defensive rebounding technique", "Exiting the basketball court", "A type of basketball play"],
    answer: "A defensive rebounding technique",
  },
  {
    question: "What is 'Triple Threat'?",
    options: ["A type of defense", "A player who can shoot, pass, and dribble", "A three-point play"],
    answer: "A player who can shoot, pass, and dribble",
  },
  {
    question: "What is a 'Backdoor Cut'?",
    options: ["A haircut style for players", "A movement towards the basket behind the defense", "A defensive strategy"],
    answer: "A movement towards the basket behind the defense",
  },
  {
    question: "What does 'Alley Oop' refer to?",
    options: ["A cheerleading chant", "A play involving a lob pass and a dunk", "A type of basketball shoe"],
    answer: "A play involving a lob pass and a dunk",
  },
  {
    question: "What is 'Man-to-Man Defense'?",
    options: ["Guarding a specific area", "Each player guarding a specific opponent", "A zone defense strategy"],
    answer: "Each player guarding a specific opponent",
  },
];

const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const toast = useToast();

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
      toast({
        title: "Correct!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Incorrect!",
        description: `Correct answer: ${quizQuestions[currentQuestionIndex].answer}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      toast({
        title: "Quiz Completed!",
        description: `Your score: ${score + 1}/${quizQuestions.length}`,
        status: "info",
        duration: 4000,
        isClosable: true,
      });
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    <Container centerContent p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Basketball Coaching Vocabulary Quiz <FaBasketballBall />
      </Heading>
      <Box width="full" borderWidth="1px" borderRadius="lg" p={4} mb={4}>
        <Text fontSize="xl" mb={2}>
          {quizQuestions[currentQuestionIndex].question}
        </Text>
        <RadioGroup onChange={setSelectedOption} value={selectedOption}>
          <Stack direction="column">
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <Radio key={index} value={option}>
                {option}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Box>
      <Button colorScheme="blue" onClick={handleNextQuestion} isDisabled={!selectedOption}>
        Next
      </Button>
    </Container>
  );
};

export default Index;
