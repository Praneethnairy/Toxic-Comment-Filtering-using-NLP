import pickle
import re
import sys

cv = pickle.load(open('D:/D mini/ML/NLP/CDSAML/toxiccommentfilter/back-end/count.pkl', 'rb'))
classifier = pickle.load(open('D:/D mini/ML/NLP/CDSAML/toxiccommentfilter/back-end/model.pkl', 'rb'))

new_review = sys.argv[1]
new_review = re.sub('[^a-zA-Z]', ' ', new_review)
new_review = new_review.lower()

new_X_test = cv.transform([new_review])
new_y_pred = classifier.predict(new_X_test)
print(new_y_pred)