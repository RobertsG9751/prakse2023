import sys
import platform
from subprocess import Popen

if platform.system() == "Windows":
    new_window_command = "cmd.exe /c start".split()
else:
    new_window_command = "x-terminal-emulator -e".split()

#backend
echo = [sys.executable, "-c",
    "import os; os.system('cd backend && npm i && node server.js')"]
processes = [Popen(new_window_command + echo)]

#frontend
echo = [sys.executable, "-c",
        "import os; os.system('cd frontend && npm start')"]
processes = [Popen(new_window_command + echo)]


for proc in processes:
    proc.wait()