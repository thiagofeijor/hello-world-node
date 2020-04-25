export default {
  "charset": "iso-8859-1",
  "headers": {
    "mime-version": "1.0",
    "content-type": "text/plain; charset=iso-8859-1",
    "content-transfer-encoding": "8bit",
    "language": "",
    "plural-forms": "nplurals=2; plural=(n!=1);",
  },
  "translations": {
    "": {
      "": {
        "msgid": "",
        "msgstr": ["Content-Type: text/plain; charset=iso-8859-1"]
      },
      "o1": {
        "msgid": "o1",
        "comments": {
          "translator": "Normal string"
        },
        "msgstr": [
          "t1"
        ]
      },
      "o2-1": {
        "msgid": "o2-1",
        "comments": {
          "translator": "Plural string"
        },
        "msgid_plural": "o2-2",
        "msgstr": [
          "t2-1",
          "t2-2"
        ]
      },
      "o3-ĆµĆ¤Ć¶Ć¼": {
        "msgid": "o3-ĆµĆ¤Ć¶Ć¼",
        "comments": {
          "translator": "Normal string with special chars"
        },
        "msgstr": [
          "t3-Ć¾Ć°"
        ]
      },
      "test": {
        "msgid": "test",
        "comments": {
          "translator": "Normal comment line 1\nNormal comment line 2",
          "extracted": "Editors note line 1\nEditors note line 2",
          "reference": "/absolute/path:13\n/absolute/path:14",
          "flag": "line 1\nline 2",
          "previous": "line 3\nline 4"
        },
        "msgstr": [
          "test"
        ]
      }
    },
    "c1": {
      "co1": {
        "msgid": "co1",
        "msgctxt": "c1",
        "comments": {
          "translator": "Normal string in a context"
        },
        "msgstr": [
          "ct1"
        ]
      }
    },
    "c2": {
      "co2-1": {
        "msgid": "co2-1",
        "msgctxt": "c2",
        "comments": {
          "translator": "Plural string in a context"
        },
        "msgid_plural": "co2-2",
        "msgstr": [
          "ct2-1",
          "ct2-2"
        ]
      }
    },
    "another context": {
      "%s example": {
        "msgctxt": "another context",
        "msgid": "%s example",
        "msgid_plural": "%s examples",
        "msgstr": ["% näide", "%s näidet"],
        "comments": {
          "translator": "This is regular comment",
          "reference": "/path/to/file:123"
        }
      }
    }
  }
}
