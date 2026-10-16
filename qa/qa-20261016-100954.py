# arquivo de teste de PR scan - vulnerabilidade nova e proposital
import os
def run(cmd):
    return os.system("echo " + cmd)  # command injection
