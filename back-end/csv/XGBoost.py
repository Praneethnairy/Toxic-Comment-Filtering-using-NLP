import pandas as pd
# import matplotlib.pyplot as plt
# import numpy as np

import nltk
# from nltk.stem.porter import PorterStemmer
from sklearn.model_selection import train_test_split
import re
import pickle
nltk.download('stopwords')
from nltk.corpus import stopwords
# from nltk.stem.porter import PorterStemmer
from sklearn.feature_extraction.text import CountVectorizer
# from sklearn.metrics import confusion_matrix,accuracy_score
from xgboost import XGBClassifier

df = pd.read_csv('D:/D mini/ML/NLP/CDSAML/toxiccommentfilter/back-end/csv/new1.csv')
df = df.dropna(subset = ['comment_text']).reset_index(drop = True)
df = df.dropna(subset = ['toxic']).reset_index(drop = True)

X = df['comment_text'].values
y = df['toxic'].values

# trainX,testX,trainY,testY = train_test_split(X,y,test_size = 0.2,random_state = 0)

all_stopwords = stopwords.words('english')
all_stopwords.remove('not')
# print(len(all_stopwords))
cv = CountVectorizer(stop_words=all_stopwords)
X = cv.fit_transform(X)
# print(len(Xtrain[0]))

# Xtest = cv.transform(testX)
pickle.dump(cv, open('D:/D mini/ML/NLP/CDSAML/toxiccommentfilter/back-end/count.pkl', 'wb'))

classifier = XGBClassifier()
classifier.fit(X,y)

pickle.dump(classifier, open('D:/D mini/ML/NLP/CDSAML/toxiccommentfilter/back-end/model.pkl', 'wb'))