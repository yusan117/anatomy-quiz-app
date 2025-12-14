import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F6F9' }, 
  innerContainer: { flex: 1 },
  scrollViewContent: { flexGrow: 1, alignItems: 'center', paddingBottom: 40, paddingTop: 10 },
  
  // --- メニュー画面 ---
  menu: { alignItems: 'center', justifyContent: 'center', flex: 1, paddingVertical: 40, width: '100%' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  subTitle: { fontSize: 16, color: '#666', marginBottom: 20 },
  
  // カテゴリ選択エリア
  categoryContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    maxHeight: '50%', // メニューの中でスクロールできるように
  },
  categoryScroll: {
    width: '100%',
  },
  accordionItem: {
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  accordionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginLeft: 10,
  },
  accordionContent: {
    paddingLeft: 20,
    paddingBottom: 10,
    backgroundColor: '#fafafa',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
  // チェックボックスの見た目（アイコンの代わり）
  checkboxBox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#4A90E2',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxInner: {
    width: 14,
    height: 14,
    backgroundColor: '#4A90E2',
    borderRadius: 2,
  },

  // モード選択ボタン
  startBtnContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  btn: { backgroundColor: '#4A90E2', padding: 15, borderRadius: 30, marginBottom: 15, alignItems: 'center', width: 250 },
  btnDisabled: { backgroundColor: '#ccc' },
  btnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  // --- クイズ画面 ---
  headerContainer: { 
    flexDirection: 'row', justifyContent: 'space-between', width: '90%', 
    backgroundColor: '#fff', padding: 15, borderRadius: 20, marginBottom: 20,
    shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2
  },
  headerText: { color: '#666', fontWeight: 'bold' },

  imageContainer: { 
    width: '90%', height: 250, 
    justifyContent: 'center', alignItems: 'center', 
    marginBottom: 30, backgroundColor: '#fff', borderRadius: 10,
    borderWidth: 1, borderColor: '#eee'
  },
  image: { width: '100%', height: '100%', borderRadius: 10 },

  // 英語入力用
  englishInputContainer: { width: '100%', alignItems: 'center', justifyContent: 'center', marginBottom: 30, position: 'relative', minHeight: 60 },
  transparentOverlayInput: { ...StyleSheet.absoluteFillObject, backgroundColor: 'transparent', color: 'transparent', opacity: 0, zIndex: 2 },
  hintContentsWrapper: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', zIndex: 1, paddingHorizontal: 10 },
  wordRow: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 10 },
  charBox: { fontSize: 28, fontWeight: 'bold', color: '#ccc', marginHorizontal: 2, minWidth: 20, textAlign: 'center' },
  charTyped: { color: '#4A90E2' },
  spacer: { width: 15 },

  // 日本語入力用
  input: { 
    width: '90%', height: 50, backgroundColor: '#fff', borderRadius: 10, 
    paddingHorizontal: 15, fontSize: 18, borderWidth: 1, borderColor: '#ccc', marginBottom: 20 
  },
  inputDisabled: { backgroundColor: '#f0f0f0', color: '#333' }, 

  // フィードバック
  feedbackContainer: { alignItems: 'center', marginBottom: 20, padding: 10, backgroundColor: '#fff', width: '90%', borderRadius: 10 },
  correctText: { fontSize: 24, fontWeight: 'bold', color: '#2ecc71', marginBottom: 5 },
  wrongText: { fontSize: 24, fontWeight: 'bold', color: '#e74c3c', marginBottom: 5 },
  correctAnswerText: { fontSize: 18, color: '#333', marginTop: 5, textAlign: 'center' },
  subText: { fontSize: 16, color: '#666' },

  // ボタン群
  buttonContainer: { width: '90%', marginTop: 10 },
  submitBtn: { backgroundColor: '#4A90E2', paddingVertical: 15, borderRadius: 30, alignItems: 'center' },
  submitBtnDisabled: { backgroundColor: '#ccc' },
  nextBtn: { backgroundColor: '#3498db', paddingVertical: 15, borderRadius: 30, alignItems: 'center' },
  submitBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  
  resultView: { alignItems: 'center', justifyContent: 'center', height: '100%' },
  backLink: { marginTop: 30 },
  backLinkText: { color: '#999', textDecorationLine: 'underline' },
});

