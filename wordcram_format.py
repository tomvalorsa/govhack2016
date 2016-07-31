import csv
import sys

# Usage: python wordcram_format.py <filename.csv>

exceptions = []
string_dict = {}

with open(sys.argv[1]) as csvfile:
  csvData = csv.DictReader(csvfile)
  for row in csvData:
    # If it isn't in exceptions, append to relevant result string
    if row['device'] not in exceptions:
      to_append = (row['device'] + ' ') * int(row['count'])

      # If result string already exists, add to it, else initialise it
      if row['Decade'] in string_dict:
        string_dict[row['Decade']] += to_append
      else:
        string_dict[row['Decade']] = to_append

for key in string_dict:
  prefix = sys.argv[1].replace('.csv', '')
  text_file = open('wordcloud/' + prefix + '_' + key + '.txt', 'w')
  text_file.write(string_dict[key])
  text_file.close()
