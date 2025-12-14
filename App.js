import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image, Keyboard } from 'react-native';

// --- 1. データ構造 ---
const MOCK_DATA = [
  {
    id: 1,
    name_jp: "気管",
    name_en: "Trachea",
    aliases_jp: ["きかん"],
    aliases_en: ["trachea"],
    category: "respiratory",
    image_source: null, 
  },
  {
    id: 2,
    name_jp: "大胸筋",
    name_en: "Pectoralis major",
    aliases_jp: ["だいきょうきん"],
    aliases_en: ["pectoralis major"],
    category: "muscle",
    // ★重要: 画像ファイルが存在することを確認してください
    image_source: require('./assets/pectralis.png'), 
  },
];

export default function App() {
  const [mode, setMode] = useState('menu'); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputText, setInputText] = useState('');
  
  const [feedbackStatus, setFeedbackStatus] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentData = MOCK_DATA[currentQuestionIndex];
  const inputRef = useRef(null);

  const startQuiz = (selectedMode) => {
    setMode(selectedMode);
    resetState(0);
  };

  const resetState = (index) => {
    setCurrentQuestionIndex(index);
    setInputText('');
    setFeedbackStatus(null);
    setIsAnswered(false);
    setIsFinished(false);
  };

  // --- 判定ロジック ---
  const checkAnswer = () => {
    // 既に回答済みなら何もしない（キーボード再表示などを防ぐため）
    if (isAnswered) return;

    const input = inputText.trim();
    if (!input) return;

    let isCorrect = false;
    if (mode === 'quiz_jp') {
      if (input === currentData.name_jp || currentData.aliases_jp.includes(input)) {
        isCorrect = true;
      }
    } else {
      const normalize = (str) => str.toLowerCase().replace(/\s+/g, ' ');
      if (normalize(input) === normalize(currentData.name_en)) {
        isCorrect = true;
      }
    }

    setFeedbackStatus(isCorrect ? 'correct' : 'wrong');
    setIsAnswered(true);
    // blurOnSubmit={true} なので自動で閉じますが、念の為明示的に閉じることも可能です
    // Keyboard.dismiss(); 
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < MOCK_DATA.length - 1) {
      resetState(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  // --- UIコンポーネント ---

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Score: 10</Text>
      <Text style={styles.headerText}>Word: {currentQuestionIndex + 1}/{MOCK_DATA.length}</Text>
    </View>
  );

  const renderImageArea = () => {
    if (isFinished) return null;
    if (currentData && currentData.image_source) {
      return (
        <View style={styles.imageContainer}>
          <Image source={currentData.image_source} style={styles.image} resizeMode="contain" />
        </View>
      );
    } else {
      return <View style={styles.imageSpacer} />;
    }
  };

  const renderEnglishHintContents = () => {
    if (!currentData) return null;
    const targetWord = currentData.name_en;
    const words = targetWord.split(' '); 
    const inputChars = inputText.split('');
    let charCounter = 0;

    return (
      <View style={styles.hintContentsWrapper}>
        {words.map((word, wordIndex) => (
          <View key={wordIndex} style={styles.wordRow}>
            {word.split('').map((char, charIndex) => {
              const currentCharIndex = charCounter;
              charCounter++;
              const isTyped = currentCharIndex < inputChars.length;
              let displayChar = isTyped ? inputChars[currentCharIndex] : '_';

              return (
                <Text key={charIndex} style={[styles.charBox, isTyped && styles.charTyped]}>
                  {displayChar}
                </Text>
              );
            })}
            {wordIndex < words.length - 1 && <View style={styles.spacer} />}
          </View>
        ))}
      </View>
    );
  };

  const renderFeedback = () => {
    if (!isAnswered) return null;
    if (feedbackStatus === 'correct') {
      return <View style={styles.feedbackContainer}><Text style={styles.correctText}>Correct!</Text></View>;
    } else {
      return (
        <View style={styles.feedbackContainer}>
          <Text style={styles.wrongText}>Not quite...</Text>
          <Text style={styles.correctAnswerText}>
            Answer: {currentData.name_en} ({currentData.name_jp})
          </Text>
        </View>
      );
    }
  };

  // --- メインレンダリング ---
  return (
    <SafeAreaView style={styles.container}>
      {mode === 'menu' && (
        <View style={styles.menu}>
          <Text style={styles.title}>解剖学マスター</Text>
          <TouchableOpacity style={styles.btn} onPress={() => startQuiz('quiz_jp')}>
            <Text style={styles.btnText}>日本語モード</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => startQuiz('quiz_en')}>
            <Text style={styles.btnText}>英語モード (タイピング)</Text>
          </TouchableOpacity>
        </View>
      )}

      {mode !== 'menu' && isFinished && (
        <View style={styles.resultView}>
          <Text style={styles.title}>Finish!</Text>
          <TouchableOpacity style={styles.btn} onPress={() => setMode('menu')}>
            <Text style={styles.btnText}>Menu</Text>
          </TouchableOpacity>
        </View>
      )}

      {mode !== 'menu' && !isFinished && (
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.innerContainer}
        >
          <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
            
            {renderHeader()}
            {renderImageArea()}

            {/* --- 入力エリア --- */}
            {mode === 'quiz_en' ? (
              // === 英語モード ===
              <View style={styles.englishInputContainer}>
                {renderEnglishHintContents()}
                <TextInput
                  ref={inputRef}
                  key={currentQuestionIndex} 
                  style={styles.transparentOverlayInput}
                  value={inputText}
                  // 回答済みなら入力を受け付けない
                  onChangeText={(text) => !isAnswered && setInputText(text)}
                  autoFocus={true} 
                  caretHidden={true}
                  keyboardType="ascii-capable"
                  autoCapitalize="none"
                  autoCorrect={false}
                  // ★修正: Enterで判定してキーボードを閉じる
                  onSubmitEditing={checkAnswer}
                  blurOnSubmit={true} // true = 閉じる
                  returnKeyType="done"
                />
              </View>
            ) : (
              // === 日本語モード ===
              <TextInput
                key={currentQuestionIndex} 
                style={[styles.input, isAnswered && styles.inputDisabled]}
                value={inputText}
                onChangeText={(text) => !isAnswered && setInputText(text)}
                placeholder="答えを入力（漢字）"
                autoFocus={true}
                // ★修正: Enterで判定してキーボードを閉じる
                onSubmitEditing={checkAnswer}
                blurOnSubmit={true} // true = 閉じる
                returnKeyType="done"
              />
            )}

            {renderFeedback()}

            {/* ボタン */}
            <View style={styles.buttonContainer}>
              {!isAnswered ? (
                <TouchableOpacity 
                  style={[styles.submitBtn, !inputText && styles.submitBtnDisabled]} 
                  onPress={checkAnswer}
                  disabled={!inputText}
                >
                  <Text style={styles.submitBtnText}>Check</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.nextBtn} onPress={nextQuestion}>
                  <Text style={styles.submitBtnText}>Next Word</Text>
                </TouchableOpacity>
              )}
            </View>

            <TouchableOpacity onPress={() => setMode('menu')} style={styles.backLink}>
              <Text style={styles.backLinkText}>Quit</Text>
            </TouchableOpacity>

          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
}

// --- スタイル定義 ---
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F6F9' }, 
  innerContainer: { flex: 1 },
  scrollViewContent: { flexGrow: 1, alignItems: 'center', paddingBottom: 20 },
  
  menu: { alignItems: 'center', justifyContent: 'center', height: '100%' },
  resultView: { alignItems: 'center', justifyContent: 'center', height: '100%' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 40, color: '#333' },
  btn: { backgroundColor: '#4A90E2', padding: 15, borderRadius: 30, marginBottom: 15, alignItems: 'center', width: 250 },
  btnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  headerContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '90%', backgroundColor: '#fff', padding: 15, borderRadius: 20, marginTop: 10, marginBottom: 20 },
  headerText: { color: '#999', fontWeight: 'bold' },

  imageContainer: { width: '100%', height: 250, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  image: { width: '90%', height: '100%' },
  imageSpacer: { height: 150 },

  englishInputContainer: { width: '100%', alignItems: 'center', justifyContent: 'center', marginBottom: 30, position: 'relative', minHeight: 60 },
  transparentOverlayInput: { ...StyleSheet.absoluteFillObject, backgroundColor: 'transparent', color: 'transparent', opacity: 0, zIndex: 2 },
  hintContentsWrapper: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', zIndex: 1 },
  wordRow: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 10 },
  charBox: { fontSize: 28, fontWeight: 'bold', color: '#ccc', marginHorizontal: 3, minWidth: 24, textAlign: 'center' },
  charTyped: { color: '#4A90E2' },
  spacer: { width: 20 },

  input: { width: '90%', height: 50, backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 15, fontSize: 16, borderWidth: 1, borderColor: '#eee', marginBottom: 20 },
  inputDisabled: { backgroundColor: '#fff', color: '#333' }, 

  feedbackContainer: { alignItems: 'center', marginBottom: 20 },
  correctText: { fontSize: 22, fontWeight: 'bold', color: '#2ecc71' },
  wrongText: { fontSize: 22, fontWeight: 'bold', color: '#e74c3c' },
  correctAnswerText: { fontSize: 16, color: '#666', marginTop: 5 },

  buttonContainer: { width: '90%', marginTop: 10 },
  submitBtn: { backgroundColor: '#4A90E2', paddingVertical: 15, borderRadius: 30, alignItems: 'center' },
  submitBtnDisabled: { backgroundColor: '#ccc' },
  nextBtn: { backgroundColor: '#3498db', paddingVertical: 15, borderRadius: 30, alignItems: 'center' },
  submitBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  backLink: { marginTop: 20 },
  backLinkText: { color: '#999' },
});

