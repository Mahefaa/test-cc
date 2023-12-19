export const riceCooker = {
    ricePresent: false,
    riceCooked: false,
    steamingInProgress: false,
    heatingInProgress: false,

    reset() {
        this.ricePresent = false;
        this.riceCooked = false;
        this.steamingInProgress = false;
        this.heatingInProgress = false;
    },

    addRice() {
        if (!this.ricePresent) {
            this.ricePresent = true;
            return 'Rice has been added.';
        }
        return 'There\'s already rice in the rice cooker.';
    },

    cookRice() {
        if (!this.ricePresent) {
            return 'Cannot cook. The rice cooker is empty.';
        }
        if (!this.riceCooked) {
            console.log('Cooking rice...');
            this.delaySync(1500);
            this.riceCooked = true;
            return 'The rice has been cooked!';
        }
        return 'The rice is already cooked.';
    },

    steam() {
        if (!this.ricePresent) {
            return 'Cannot steam. The rice cooker is empty.';
        }
        if (!this.steamingInProgress) {
            console.log('Steaming in progress...');
            this.steamingInProgress = true;
            this.delaySync(1500);
            this.steamingInProgress = false;
            return 'Steaming completed!';
        }
        return 'Steaming is already in progress.';
    },

    keepWarm() {
        if (!this.ricePresent) {
            return 'Cannot keep warm. The rice cooker is empty.';
        } else if (!this.riceCooked) {
            return 'Cannot keep warm. The rice is not cooked.';
        }
        if (!this.heatingInProgress) {
            this.heatingInProgress = true;
            return 'The rice is now being kept warm.';
        }
        return 'Keeping warm is already in progress.';
    },

    removeRice() {
        if (this.ricePresent) {
            this.reset();
            return 'The rice has been removed  from the rice cooker.';
        }
        return 'There\'s no rice to remove or it is not cooked yet.';
    },

    delaySync(ms) {
        const start = Date.now();
        while (Date.now() - start < ms) {
        }
    }
};


export function simulateRiceCooker() {
    let condition = true;

    while (condition) {
        const input = +prompt('Enter your choice: ');
        switch (input) {
            case 1 : {
                console.log(riceCooker.addRice());
                break;
            }
            case 2 : {
                console.log(riceCooker.cookRice());
                break;
            }
            case 3: {
                console.log(riceCooker.steam());
                break;
            }
            case 4: {
                console.log(riceCooker.keepWarm());
                break;
            }
            case 5 : {
                console.log(riceCooker.removeRice());
                break;
            }
            case 6: {
                console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
                condition = false;
                break;
            }
            default: {
                console.log(`Invalid choice ${input}. Please select a valid option.`);
            }
        }
    }
}

simulateRiceCooker()