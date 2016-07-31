import csv
import sys

# Usage: python wordcram_format.py <filename.csv>

exceptions = ['', ' ', 'A', 'a', 'for', 'and/or', 'and', 'FOR', '-', '&', 'with', 'without', 'an', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '0', '11', '12', '13', '14', 'All', 'AT', 'ATOP', 'B', 'BESIDE', 'BETWEEN', 'BY', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'a', 'for', 'and/or', 'and', 'FOR', '-', '&', 'with', 'without', 'an', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '0', '11', '12', '13', '14', 'All', 'AT', 'ATOP', 'B', 'BESIDE', 'BETWEEN', 'BY', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us', 'the', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
string_dict = {}

with open(sys.argv[1]) as csvfile:
  csvData = csv.DictReader(csvfile)
  count = 0
  for row in csvData:
    print(count)
    # If it isn't in exceptions, append to relevant result string
    if row['device'] not in exceptions and row['count']:
      to_append = (row['device'] + ' ') * int(row['count'])

      # If result string already exists, add to it, else initialise it
      if row['Decade'] in string_dict:
        string_dict[row['Decade']] += to_append
      else:
        string_dict[row['Decade']] = to_append
      count += 1

# Write each string to a text file
for key in string_dict:
  prefix = sys.argv[1].replace('.csv', '')
  text_file = open('wordcloud/' + prefix + '_' + key + '.txt', 'w')
  text_file.write(string_dict[key])
  text_file.close()
